import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getMockAlbumById,
  getMockAlbumsList,
} from '../../app/pages/gallery/mockData';

/** Simulated network latency for mock responses. */
const MOCK_DELAY_MS = 500;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Gallery RTK Query API slice.
 *
 * Currently backed by mock data. When the real backend is available, replace
 * the queryFn bodies below with fetch/axios calls — UI hooks stay unchanged.
 *
 * Example future integration:
 *   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
 *   getAlbums: builder.query({ query: () => '/gallery/albums' }),
 *   getAlbumById: builder.query({ query: (id) => `/gallery/albums/${id}` }),
 */
export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Album', 'AlbumList'],
  endpoints: (builder) => ({
    getAlbums: builder.query({
      async queryFn() {
        try {
          await delay(MOCK_DELAY_MS);

          // TODO: Replace mock with real API — e.g. GET /api/gallery/albums
          return { data: getMockAlbumsList() };
        } catch (error) {
          return {
            error: {
              status: 'FETCH_ERROR',
              error: error.message || 'Failed to load gallery albums',
            },
          };
        }
      },
      providesTags: [{ type: 'AlbumList', id: 'LIST' }],
    }),

    getAlbumById: builder.query({
      async queryFn(albumId) {
        try {
          await delay(MOCK_DELAY_MS);

          const id = Number(albumId);

          if (!id || Number.isNaN(id)) {
            return { error: { status: 400, data: 'Invalid album id' } };
          }

          // TODO: Replace mock with real API — e.g. GET /api/gallery/albums/:id
          const album = getMockAlbumById(id);

          if (!album) {
            return { error: { status: 404, data: 'Album not found' } };
          }

          return { data: album };
        } catch (error) {
          return {
            error: {
              status: 'FETCH_ERROR',
              error: error.message || 'Failed to load album',
            },
          };
        }
      },
      providesTags: (result, error, albumId) => [
        { type: 'Album', id: albumId },
      ],
    }),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumByIdQuery } = galleryApi;
