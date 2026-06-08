# Gallery Module — Ever Green School Website

This document describes the Gallery feature implementation, architecture, and how to connect it to a real backend when APIs become available.

---

## Overview

The Gallery module lets visitors browse school photo albums and view images in a responsive grid with a lightbox modal.

| Route | Page | Description |
|-------|------|-------------|
| `/gallery` | Gallery listing | All albums with cover, title, photo count, date |
| `/gallery/:albumId` | Album details | All photos in one album + lightbox |

---

## Tech Stack Used

- **React 18** + **JavaScript** (`.js` / `.jsx`)
- **Redux Toolkit** + **RTK Query** for data fetching
- **React Router v6** for routing
- **SCSS** + **Bootstrap 5** for layout and styling
- **date-fns** for date formatting
- **EdUnity** template patterns (Breadcrumb, SectionTitle, HeaderFive, Footer)

---

## Folder Structure

```
src/
├── store/
│   ├── index.js                 # Redux store configuration
│   └── api/
│       └── galleryApi.js        # RTK Query slice (mock → real API swap point)
│
├── app/
│   └── pages/
│       └── gallery/
│           ├── index.js             # Route wrapper: Header + GalleryPage + Footer
│           ├── gallery-details.js   # Route wrapper: Header + GalleryDetailsPage + Footer
│           ├── GalleryPage.js       # Album listing page
│           ├── GalleryDetailsPage.js# Single album + lightbox
│           ├── mockData.js          # Mock data (imported ONLY by galleryApi.js)
│           └── components/
│               ├── AlbumCard.js     # Album card on listing page
│               ├── ImageGrid.js     # Responsive photo grid
│               ├── GalleryModal.js  # Lightbox with prev/next + keyboard nav
│               └── GalleryStatus.js # Loading / error / empty states
│
└── assets/
    └── scss/
        └── pages/
            └── _gallery.scss    # Gallery-specific styles
```

---

## Data Flow

```
Page Component
    ↓
RTK Query Hook (useGetAlbumsQuery / useGetAlbumByIdQuery)
    ↓
galleryApi.js (queryFn)
    ↓
mockData.js (temporary)  →  Real API (future)
```

**Rule:** Page components must **never** import `mockData.js` directly. All data goes through RTK Query hooks.

---

## RTK Query Endpoints

### `getAlbums`

Returns album summaries for the listing page:

```json
[
  {
    "id": 1,
    "title": "Annual Function 2025",
    "coverImage": "...",
    "totalImages": 35,
    "date": "2025-05-10"
  }
]
```

**Hook:** `useGetAlbumsQuery()`

### `getAlbumById`

Returns a single album with all images:

```json
{
  "id": 1,
  "title": "Annual Function 2025",
  "images": [
    { "id": 1, "url": "https://example.com/image1.jpg" }
  ]
}
```

**Hook:** `useGetAlbumByIdQuery(albumId)`

---

## Mock API (Current)

- Mock data: `src/app/pages/gallery/mockData.js`
- Simulated delay: **500ms** (configurable in `galleryApi.js` via `MOCK_DELAY_MS`)
- Uses local school/event images until real URLs are available

---

## Connecting Real Backend (Future)

When APIs are ready, update **only** `src/store/api/galleryApi.js`.

### Step 1 — Add base URL

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Album', 'AlbumList'],
  endpoints: (builder) => ({
    // ...
  }),
});
```

### Step 2 — Replace queryFn with query

```js
getAlbums: builder.query({
  query: () => '/gallery/albums',
  providesTags: [{ type: 'AlbumList', id: 'LIST' }],
}),

getAlbumById: builder.query({
  query: (albumId) => `/gallery/albums/${albumId}`,
  providesTags: (result, error, albumId) => [{ type: 'Album', id: albumId }],
}),
```

### Step 3 — Remove mock imports

- Delete or archive `mockData.js`
- Remove `fakeBaseQuery`, `queryFn`, and `delay()` from `galleryApi.js`

**No changes required** in:

- `GalleryPage.js`
- `GalleryDetailsPage.js`
- `AlbumCard.js`, `ImageGrid.js`, `GalleryModal.js`

---

## UI Features

### Listing Page (`/gallery`)

- Breadcrumb + section title
- 3-column responsive album grid
- Cover image, title, photo count, formatted date
- Hover overlay with “View Album”
- Loading, error (with retry), and empty states

### Album Details (`/gallery/:albumId`)

- Back link to gallery
- Album title + photo count
- Responsive image grid (4 → 3 → 2 columns)
- Lazy-loaded thumbnails
- Lightbox modal on click

### Lightbox (`GalleryModal`)

- Full-screen image preview
- Previous / Next navigation
- Keyboard: `←` / `→` navigate, `Esc` close
- Photo counter (e.g. `3 / 12`)
- Mobile-friendly controls
- Body scroll lock while open

---

## Routing

Registered in `src/app/App.js`:

```jsx
<Route path="/gallery" element={<Gallery />} />
<Route path="/gallery/:albumId" element={<GalleryDetails />} />
```

Navigation link added under **Pages → Photo Gallery** in `MenuItems.js`.

---

## Redux Setup

Store configured in `src/store/index.js` and provided in `src/index.js`:

```jsx
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
```

Dependencies added:

- `@reduxjs/toolkit`
- `react-redux`

---

## Styling

Gallery styles: `src/assets/scss/pages/_gallery.scss`

Imported in `src/assets/scss/main.scss`:

```scss
@import 'pages/gallery';
```

Class prefix: `it-gallery-*` (consistent with EdUnity `it-event-*`, `it-blog-*`, etc.)

---

## Expected API Contract (for backend team)

### `GET /gallery/albums`

```json
[
  {
    "id": 1,
    "title": "Annual Function 2025",
    "coverImage": "https://cdn.example.com/albums/1/cover.jpg",
    "totalImages": 35,
    "date": "2025-05-10"
  }
]
```

### `GET /gallery/albums/:id`

```json
{
  "id": 1,
  "title": "Annual Function 2025",
  "images": [
    { "id": 101, "url": "https://cdn.example.com/albums/1/photo-101.jpg" },
    { "id": 102, "url": "https://cdn.example.com/albums/1/photo-102.jpg" }
  ]
}
```

### Error responses

| Status | When |
|--------|------|
| `404` | Album not found |
| `400` | Invalid album ID |
| `5xx` | Server error (UI shows retry) |

---

## Testing Checklist

- [ ] `/gallery` loads album cards after brief loading state
- [ ] Clicking an album opens `/gallery/:albumId`
- [ ] Album grid shows all photos
- [ ] Clicking a photo opens lightbox
- [ ] Prev/Next and keyboard navigation work
- [ ] Invalid album ID shows “Album not found”
- [ ] Mobile layout is usable
- [ ] Menu link “Photo Gallery” works

---

## Changelog

| Date | Change |
|------|--------|
| 2026-06-08 | Initial Gallery module with RTK Query mock API |
