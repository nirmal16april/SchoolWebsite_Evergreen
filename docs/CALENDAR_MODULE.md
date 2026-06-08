# Academic Calendar Module — Ever Green School Website

This document describes the Academic Calendar feature implementation, architecture, and how to connect it to a real backend when APIs become available.

---

## Overview

The Academic Calendar module displays school events, holidays, examinations, activities, admissions schedules, and important dates in two switchable views.

| Route | Page | Description |
|-------|------|-------------|
| `/calendar` | Academic Calendar | Monthly calendar view + chronological list view |

---

## Tech Stack Used

- **React 18** + **JavaScript** (`.js` / `.jsx`)
- **Redux Toolkit** + **RTK Query** for data fetching
- **React Router v6** for routing
- **date-fns** for date formatting and calendar logic
- **SCSS** + **Bootstrap 5** for layout and styling
- **EdUnity** template patterns (Breadcrumb, SectionTitle, HeaderFive, Footer)

---

## Folder Structure

```
src/
├── store/
│   ├── index.js
│   └── api/
│       └── calendarApi.js
│
├── app/
│   └── pages/
│       └── calendar/
│           ├── index.js              # Route wrapper: Header + CalendarPage + Footer
│           ├── CalendarPage.js       # Main calendar page
│           ├── mockData.js           # Mock data (imported ONLY by calendarApi.js)
│           ├── utils/
│           │   └── eventHelpers.js   # Date/filter/calendar utilities
│           └── components/
│               ├── CalendarView.js   # Monthly calendar grid
│               ├── EventListView.js  # Chronological list grouped by month
│               ├── EventCard.js      # Single event card
│               ├── EventFilters.js   # Event type filters
│               ├── EventModal.js     # Event details modal
│               ├── ViewSwitcher.js   # Calendar / List toggle
│               └── CalendarStatus.js # Loading / error / empty states
│
└── assets/
    └── scss/
        └── pages/
            └── _calendar.scss
```

---

## Data Flow

```
CalendarPage
    ↓
useGetCalendarEventsQuery()
    ↓
calendarApi.js (queryFn)
    ↓
mockData.js (temporary)  →  Real API (future)

EventModal
    ↓
useGetCalendarEventByIdQuery(id)
    ↓
calendarApi.js
```

**Rule:** Page components must **never** import `mockData.js` directly.

---

## RTK Query Endpoints

### `getCalendarEvents`

Returns all calendar events sorted by start date.

```json
[
  {
    "id": 1,
    "title": "Summer Vacation Begins",
    "description": "School closed for summer vacation.",
    "startDate": "2026-06-01",
    "endDate": "2026-06-30",
    "eventType": "holiday",
    "location": null,
    "academicYear": "2026-27"
  }
]
```

**Hook:** `useGetCalendarEventsQuery()`

### `getCalendarEventById`

Returns a single event with full details.

**Hook:** `useGetCalendarEventByIdQuery(eventId)`

---

## Event Types

| `eventType` | Filter Label | Badge Color |
|-------------|--------------|-------------|
| `holiday` | Holidays | Amber |
| `exam` | Exams | Red |
| `event` | Activities | Blue |
| `admission` | Admissions | Green |
| `important` | Important Dates | Purple |

Filter value `all` shows every event type.

---

## UI Features

### Calendar View
- Traditional monthly grid layout
- Previous / Next month navigation
- "Today" button when viewing a different month
- Color-coded event markers by type
- Multi-day events appear on every day in range
- Click event → details modal

### List View
- Events sorted chronologically
- Grouped by month
- Responsive event cards with badge, dates, description

### Event Modal
- Fetches full event via `useGetCalendarEventByIdQuery`
- Title, description, type badge, date range
- Location and academic year (when available)
- Keyboard `Esc` to close

### Filters
Work in both Calendar View and List View.

---

## Connecting Real Backend (Future)

Update **only** `src/store/api/calendarApi.js`:

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['CalendarEvent', 'CalendarEventList'],
  endpoints: (builder) => ({
    getCalendarEvents: builder.query({
      query: () => '/calendar/events',
      providesTags: [{ type: 'CalendarEventList', id: 'LIST' }],
    }),
    getCalendarEventById: builder.query({
      query: (id) => `/calendar/events/${id}`,
      providesTags: (result, error, id) => [{ type: 'CalendarEvent', id }],
    }),
  }),
});
```

No UI changes required.

---

## Routing

```jsx
<Route path="/calendar" element={<Calendar />} />
```

Navigation: **Pages → Academic Calendar** in `MenuItems.js`.

---

## Expected API Contract (for backend team)

### `GET /calendar/events`

Array of event objects (see RTK Query section above).

### `GET /calendar/events/:id`

Single event object with optional `location` and `academicYear` fields.

### Error responses

| Status | When |
|--------|------|
| `404` | Event not found |
| `400` | Invalid event ID |
| `5xx` | Server error |

---

## Testing Checklist

- [ ] `/calendar` loads with loading state then events
- [ ] Calendar View shows current month with event markers
- [ ] Prev/Next month navigation works
- [ ] List View groups events by month
- [ ] View switcher toggles between views
- [ ] All filter types work in both views
- [ ] Clicking event opens modal with details
- [ ] Modal closes on backdrop click and `Esc`
- [ ] Empty state when filter matches no events
- [ ] Error state with retry button
- [ ] Mobile layout is usable

---

## Changelog

| Date | Change |
|------|--------|
| 2026-06-08 | Initial Academic Calendar module with RTK Query mock API |
