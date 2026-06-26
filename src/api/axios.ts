import axios, { AxiosError, AxiosInstance } from 'axios';

import { ApiRequestError } from '../types/api';
import { getApiBaseUrl } from './utils/apiBaseUrl';
import { toApiRequestError } from './utils/responseUtils';

const API_TIMEOUT_MS = 15000;

export const apiClient: AxiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: API_TIMEOUT_MS,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  config.baseURL = getApiBaseUrl();
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(toApiRequestError(error))
);

export function assertValidResponseData<T>(
  data: T | null | undefined,
  message: string,
  status = 404
): T {
  if (data === null || data === undefined) {
    throw new ApiRequestError(message, status);
  }

  return data;
}
