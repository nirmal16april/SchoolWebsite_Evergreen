import { configureStore } from '@reduxjs/toolkit';

import { calendarApi } from './api/calendarApi';
import { galleryApi } from './api/galleryApi';

export const store = configureStore({
  reducer: {
    [galleryApi.reducerPath]: galleryApi.reducer,
    [calendarApi.reducerPath]: calendarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      galleryApi.middleware,
      calendarApi.middleware
    ),
});
