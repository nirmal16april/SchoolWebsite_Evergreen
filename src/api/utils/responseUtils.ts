import { ApiRequestError } from '../../types/api';
import { toSecureMediaUrl } from './apiBaseUrl';

export function unwrapListPayload(data: unknown): unknown[] {
  if (Array.isArray(data)) {
    return data;
  }

  if (data && typeof data === 'object') {
    const record = data as Record<string, unknown>;

    if (Array.isArray(record.data)) {
      return record.data as unknown[];
    }

    if (record.data && typeof record.data === 'object' && !Array.isArray(record.data)) {
      const nested = record.data as Record<string, unknown>;

      if (Array.isArray(nested.items)) {
        return nested.items as unknown[];
      }

      if (Array.isArray(nested.data)) {
        return nested.data as unknown[];
      }
    }

    const listKeys = ['items', 'data', 'result', 'albums', 'events', 'records', 'content'];

    for (const key of listKeys) {
      if (Array.isArray(record[key])) {
        return record[key] as unknown[];
      }
    }
  }

  return [];
}

export function unwrapObjectPayload(data: unknown): Record<string, unknown> {
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    const record = data as Record<string, unknown>;

    if (record.data && typeof record.data === 'object' && !Array.isArray(record.data)) {
      return record.data as Record<string, unknown>;
    }

    return record;
  }

  return {};
}

export function resolveBase64Image(contentType: string, base64: string): string {
  if (!base64) {
    return '';
  }

  if (base64.startsWith('data:')) {
    return base64;
  }

  const type = contentType || 'image/jpeg';
  return `data:${type};base64,${base64}`;
}

export function readString(
  source: Record<string, unknown>,
  keys: string[],
  fallback = ''
): string {
  for (const key of keys) {
    const value = source[key];

    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }

    if (typeof value === 'number' && !Number.isNaN(value)) {
      return String(value);
    }
  }

  return fallback;
}

export function readRawString(
  source: Record<string, unknown>,
  keys: string[],
  fallback = ''
): string {
  for (const key of keys) {
    const value = source[key];

    if (typeof value === 'string' && value.length > 0) {
      return value;
    }
  }

  return fallback;
}

export function readId(
  source: Record<string, unknown>,
  keys: string[],
  fallback = ''
): string {
  return readString(source, keys, fallback);
}

export function isValidEntityId(id?: string | null): boolean {
  return typeof id === 'string' && id.trim().length > 0;
}

export function readNumber(
  source: Record<string, unknown>,
  keys: string[],
  fallback = 0
): number {
  for (const key of keys) {
    const value = source[key];

    if (typeof value === 'number' && !Number.isNaN(value)) {
      return value;
    }

    if (typeof value === 'string' && value.trim() && !Number.isNaN(Number(value))) {
      return Number(value);
    }
  }

  return fallback;
}

export function normalizeDate(value: unknown): string {
  if (typeof value !== 'string' || !value.trim()) {
    return '';
  }

  return value.trim().slice(0, 10);
}

export function resolveMediaUrl(url: string): string {
  return toSecureMediaUrl(url);
}

export function toApiRequestError(error: unknown): ApiRequestError {
  if (error instanceof ApiRequestError) {
    return error;
  }

  if (
    typeof error === 'object' &&
    error !== null &&
    'isAxiosError' in error &&
    (error as { isAxiosError?: boolean }).isAxiosError
  ) {
    const axiosError = error as {
      response?: { status?: number; data?: unknown };
      code?: string;
      message?: string;
    };

    if (axiosError.code === 'ECONNABORTED') {
      return new ApiRequestError('The request timed out. Please try again.', 408);
    }

    if (!axiosError.response) {
      return new ApiRequestError(
        'Network error. Please check your connection and try again.'
      );
    }

    const status = axiosError.response.status;
    const responseData = axiosError.response.data;
    const messageFromBody =
      typeof responseData === 'object' &&
      responseData !== null &&
      'message' in responseData &&
      typeof (responseData as { message?: unknown }).message === 'string'
        ? (responseData as { message: string }).message
        : undefined;

    if (status === 404) {
      return new ApiRequestError(messageFromBody || 'Resource not found.', 404);
    }

    if (status === 400) {
      return new ApiRequestError(messageFromBody || 'Invalid request.', 400);
    }

    return new ApiRequestError(
      messageFromBody || 'Something went wrong while loading data.',
      status
    );
  }

  if (error instanceof Error) {
    return new ApiRequestError(error.message);
  }

  return new ApiRequestError('Unexpected error. Please try again.');
}
