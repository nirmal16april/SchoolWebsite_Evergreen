import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  getMockCalendarEventById,
  getMockCalendarEvents,
} from '../../app/pages/calendar/mockData';

/** Simulated network latency for mock responses. */
const MOCK_DELAY_MS = 500;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Academic Calendar RTK Query API slice.
 *
 * Currently backed by mock data. When the real backend is available, replace
 * the queryFn bodies below with fetch/axios calls — UI hooks stay unchanged.
 *
 * Example future integration:
 *   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
 *   getCalendarEvents: builder.query({ query: () => '/calendar/events' }),
 *   getCalendarEventById: builder.query({ query: (id) => `/calendar/events/${id}` }),
 */
export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['CalendarEvent', 'CalendarEventList'],
  endpoints: (builder) => ({
    getCalendarEvents: builder.query({
      async queryFn() {
        try {
          await delay(MOCK_DELAY_MS);

          // TODO: Replace mock with real API — e.g. GET /api/calendar/events
          return { data: getMockCalendarEvents() };
        } catch (error) {
          return {
            error: {
              status: 'FETCH_ERROR',
              error: error.message || 'Failed to load calendar events',
            },
          };
        }
      },
      providesTags: [{ type: 'CalendarEventList', id: 'LIST' }],
    }),

    getCalendarEventById: builder.query({
      async queryFn(eventId) {
        try {
          await delay(MOCK_DELAY_MS);

          const id = Number(eventId);

          if (!id || Number.isNaN(id)) {
            return { error: { status: 400, data: 'Invalid event id' } };
          }

          // TODO: Replace mock with real API — e.g. GET /api/calendar/events/:id
          const event = getMockCalendarEventById(id);

          if (!event) {
            return { error: { status: 404, data: 'Event not found' } };
          }

          return { data: event };
        } catch (error) {
          return {
            error: {
              status: 'FETCH_ERROR',
              error: error.message || 'Failed to load calendar event',
            },
          };
        }
      },
      providesTags: (result, error, eventId) => [
        { type: 'CalendarEvent', id: eventId },
      ],
    }),
  }),
});

export const { useGetCalendarEventsQuery, useGetCalendarEventByIdQuery } =
  calendarApi;
