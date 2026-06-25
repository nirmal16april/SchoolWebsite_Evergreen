export class ApiRequestError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiRequestError';
    this.status = status;
  }
}

export interface QueryState<T> {
  data?: T;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: ApiRequestError | null;
  refetch: () => Promise<void>;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalCount?: number;
  totalPages?: number;
  hasNextPage?: boolean;
}

export interface PaginatedResult<T> {
  items: T[];
  meta: PaginationMeta;
}
