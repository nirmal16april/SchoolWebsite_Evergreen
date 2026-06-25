/** Default page size when loading album list records. */
export const DEFAULT_ALBUMS_PAGE_SIZE = 50;

/** Album images API enforces a maximum page size of 10. */
export const ALBUM_IMAGES_PAGE_SIZE = 10;

/** Maximum records requested per API page for album list. */
export const MAX_API_PAGE_SIZE = 100;

/** Cache TTL for album list (10 minutes). */
export const ALBUMS_CACHE_TTL_MS = 10 * 60 * 1000;

/** Cache TTL for album images (15 minutes). */
export const ALBUM_IMAGES_CACHE_TTL_MS = 15 * 60 * 1000;

/** Cache TTL for calendar events (10 minutes). */
export const EVENTS_CACHE_TTL_MS = 10 * 60 * 1000;

/** @deprecated Use resource-specific TTL constants instead. */
export const API_CACHE_TTL_MS = ALBUMS_CACHE_TTL_MS;
