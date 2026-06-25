import { DEFAULT_ALBUMS_PAGE_SIZE } from '../../constants/api';
import { PaginatedResult, PaginationMeta } from '../../types/api';
import { readNumber, unwrapListPayload, unwrapObjectPayload } from './responseUtils';

function extractPaginationMeta(
  data: unknown,
  itemsLength: number,
  page: number,
  pageSize: number
): PaginationMeta {
  const record = unwrapObjectPayload(data);
  const totalCount = readNumber(record, ['total', 'totalCount', 'count'], 0);
  const totalPages =
    readNumber(record, ['totalPages', 'pageCount'], 0) ||
    (totalCount > 0 ? Math.ceil(totalCount / pageSize) : 0);
  const hasNextPage = record.hasNextPage === true;

  return {
    page: readNumber(record, ['page', 'currentPage'], page),
    pageSize: readNumber(record, ['pageSize', 'limit', 'size'], pageSize),
    totalCount: totalCount || undefined,
    totalPages: totalPages || undefined,
    hasNextPage,
  };
}

export function parsePaginatedResponse<T>(
  data: unknown,
  mapItem: (item: unknown) => T | null,
  page = 1,
  pageSize = DEFAULT_ALBUMS_PAGE_SIZE
): PaginatedResult<T> {
  const items = unwrapListPayload(data)
    .map(mapItem)
    .filter((item): item is T => item !== null);

  return {
    items,
    meta: extractPaginationMeta(data, items.length, page, pageSize),
  };
}

export function hasMorePages(meta: PaginationMeta, itemsLength: number): boolean {
  if (meta.hasNextPage === true) {
    return true;
  }

  if (meta.hasNextPage === false) {
    return false;
  }

  if (meta.totalPages && meta.page >= meta.totalPages) {
    return false;
  }

  if (meta.totalCount && meta.page * meta.pageSize >= meta.totalCount) {
    return false;
  }

  return itemsLength >= meta.pageSize;
}

export async function fetchAllPaginatedItems<T>(
  fetchPage: (page: number, pageSize: number) => Promise<PaginatedResult<T>>,
  pageSize = DEFAULT_ALBUMS_PAGE_SIZE
): Promise<T[]> {
  const allItems: T[] = [];
  let page = 1;

  while (true) {
    const result = await fetchPage(page, pageSize);
    allItems.push(...result.items);

    if (!hasMorePages(result.meta, result.items.length)) {
      break;
    }

    page += 1;
  }

  return allItems;
}
