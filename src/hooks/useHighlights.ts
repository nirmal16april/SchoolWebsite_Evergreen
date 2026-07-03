import { useCallback, useEffect, useState } from 'react';

import {
  getCachedBoardToppers,
  getCachedStudentBirthdays,
  hasCachedBoardToppers,
  hasCachedStudentBirthdays,
  loadBoardToppers,
  loadStudentBirthdays,
} from '../api/cache';
import { toApiRequestError } from '../api/utils/responseUtils';
import { ApiRequestError, QueryState } from '../types/api';
import { BoardTopper, StudentBirthday } from '../types/highlights';

const loadClassXToppers = (force = false) => loadBoardToppers(10, force);
const loadClassXiiToppers = (force = false) => loadBoardToppers(12, force);
const getCachedClassXToppers = () => getCachedBoardToppers(10);
const getCachedClassXiiToppers = () => getCachedBoardToppers(12);
const hasCachedClassXToppers = () => hasCachedBoardToppers(10);
const hasCachedClassXiiToppers = () => hasCachedBoardToppers(12);

function createInitialState<T>(cachedData?: T): Omit<QueryState<T>, 'refetch'> {
  return {
    data: cachedData,
    isLoading: !cachedData,
    isFetching: false,
    isError: false,
    error: null,
  };
}

function useCachedListQuery<T>(
  getCached: () => T | null,
  hasCached: () => boolean,
  load: (force?: boolean) => Promise<T>
): QueryState<T> {
  const [state, setState] = useState<Omit<QueryState<T>, 'refetch'>>(() =>
    createInitialState(getCached() || undefined)
  );

  const fetchData = useCallback(
    async (force = false) => {
      if (!force && hasCached()) {
        const cached = getCached();

        if (cached) {
          setState({
            data: cached,
            isLoading: false,
            isFetching: false,
            isError: false,
            error: null,
          });
          return;
        }
      }

      setState((current) => ({
        ...current,
        isLoading: !current.data,
        isFetching: true,
        isError: false,
        error: null,
      }));

      try {
        const data = await load(force);
        setState({
          data,
          isLoading: false,
          isFetching: false,
          isError: false,
          error: null,
        });
      } catch (error) {
        const apiError = toApiRequestError(error);
        setState((current) => ({
          data: current.data,
          isLoading: false,
          isFetching: false,
          isError: true,
          error: apiError,
        }));
      }
    },
    [getCached, hasCached, load]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: () => fetchData(true),
  };
}

export function useStudentBirthdays(): QueryState<StudentBirthday[]> {
  return useCachedListQuery(
    getCachedStudentBirthdays,
    hasCachedStudentBirthdays,
    loadStudentBirthdays
  );
}

export function useClassXToppers(): QueryState<BoardTopper[]> {
  return useCachedListQuery(
    getCachedClassXToppers,
    hasCachedClassXToppers,
    loadClassXToppers
  );
}

export function useClassXiiToppers(): QueryState<BoardTopper[]> {
  return useCachedListQuery(
    getCachedClassXiiToppers,
    hasCachedClassXiiToppers,
    loadClassXiiToppers
  );
}

export type { ApiRequestError };
