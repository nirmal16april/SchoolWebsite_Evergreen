import { useCallback, useEffect, useState } from 'react';

import {
  getCachedAlbumDetail,
  getCachedAlbums,
  hasCachedAlbumDetail,
  hasCachedAlbums,
  loadAlbumDetail,
  loadAlbums,
} from '../api/cache';
import { toApiRequestError, isValidEntityId } from '../api/utils/responseUtils';
import { ApiRequestError, QueryState } from '../types/api';
import { Album, AlbumDetail } from '../types/gallery';

function createInitialState<T>(cachedData?: T): Omit<QueryState<T>, 'refetch'> {
  return {
    data: cachedData,
    isLoading: !cachedData,
    isFetching: false,
    isError: false,
    error: null,
  };
}

export function useGalleryAlbums(): QueryState<Album[]> {
  const [state, setState] = useState<Omit<QueryState<Album[]>, 'refetch'>>(
    () => createInitialState(getCachedAlbums() || undefined)
  );

  const load = useCallback(async (force = false) => {
    if (!force && hasCachedAlbums()) {
      const cachedAlbums = getCachedAlbums();

      if (cachedAlbums) {
        setState({
          data: cachedAlbums,
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
      const albums = await loadAlbums(force);
      setState({
        data: albums,
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
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    ...state,
    refetch: () => load(true),
  };
}

export function useAlbumDetail(
  albumId?: string,
  options: { skip?: boolean } = {}
): QueryState<AlbumDetail> {
  const { skip = false } = options;
  const normalizedAlbumId = albumId?.trim() || '';

  const [state, setState] = useState<Omit<QueryState<AlbumDetail>, 'refetch'>>(() => {
    const cachedAlbum =
      !skip && isValidEntityId(normalizedAlbumId)
        ? getCachedAlbumDetail(normalizedAlbumId) || undefined
        : undefined;

    return createInitialState(cachedAlbum);
  });

  const load = useCallback(
    async (force = false) => {
      if (!isValidEntityId(normalizedAlbumId)) {
        setState({
          data: undefined,
          isLoading: false,
          isFetching: false,
          isError: true,
          error: new ApiRequestError('Invalid album id.', 400),
        });
        return;
      }

      if (!force && hasCachedAlbumDetail(normalizedAlbumId)) {
        const cachedAlbum = getCachedAlbumDetail(normalizedAlbumId);

        if (cachedAlbum) {
          setState({
            data: cachedAlbum,
            isLoading: false,
            isFetching: false,
            isError: false,
            error: null,
          });
          return;
        }
      }

      setState((current) => ({
        data: force ? undefined : current.data,
        isLoading: !current.data,
        isFetching: true,
        isError: false,
        error: null,
      }));

      try {
        const album = await loadAlbumDetail(normalizedAlbumId, force);
        setState({
          data: album,
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
    [normalizedAlbumId]
  );

  useEffect(() => {
    if (skip || !isValidEntityId(normalizedAlbumId)) {
      return;
    }

    load();
  }, [load, normalizedAlbumId, skip]);

  return {
    ...state,
    refetch: () => load(true),
  };
}
