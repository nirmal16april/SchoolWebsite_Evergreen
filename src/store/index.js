import { configureStore } from '@reduxjs/toolkit';

import { galleryApi } from './api/galleryApi';

export const store = configureStore({
  reducer: {
    [galleryApi.reducerPath]: galleryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(galleryApi.middleware),
});
