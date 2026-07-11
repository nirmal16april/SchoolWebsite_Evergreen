import {
  ALBUM_IMAGES_CACHE_TTL_MS,
  ALBUMS_CACHE_TTL_MS,
  EVENTS_CACHE_TTL_MS,
  HIGHLIGHTS_CACHE_TTL_MS,
} from '../../constants/api';
import { fetchCalendarEvents } from '../calendar';
import { fetchAlbumDetail, fetchAlbums } from '../gallery';
import {
  fetchClassXiiToppers,
  fetchClassXToppers,
  fetchStudentBirthdays,
} from '../highlights';
import {
  DEFAULT_EVENTS_FROM_MONTH,
  DEFAULT_EVENTS_TO_MONTH,
} from '../calendar';
import { EventsQueryParams } from '../../types/calendar';
import { CalendarEvent } from '../../types/calendar';
import { Album, AlbumDetail } from '../../types/gallery';
import { BoardTopper, StudentBirthday } from '../../types/highlights';
import { apiCache } from './apiCache';
import { cacheKeys, cachePrefixes } from './cacheKeys';

function buildEventsQueryKey(params: EventsQueryParams = {}): string {
  return JSON.stringify({
    fromMonth: params.fromMonth ?? DEFAULT_EVENTS_FROM_MONTH,
    toMonth: params.toMonth ?? DEFAULT_EVENTS_TO_MONTH,
    search: params.search?.trim() || null,
    category: params.category?.trim() || null,
  });
}

function syncAlbumImageCount(albumId: string, imageCount: number): void {
  const albums = apiCache.get<Album[]>(cacheKeys.albums());

  if (!albums) {
    return;
  }

  const updatedAlbums = albums.map((album) =>
    album.id === albumId ? { ...album, totalImages: imageCount } : album
  );

  apiCache.set(cacheKeys.albums(), updatedAlbums, ALBUMS_CACHE_TTL_MS);
}

export function getCachedAlbums(): Album[] | null {
  return apiCache.get<Album[]>(cacheKeys.albums());
}

export function hasCachedAlbums(): boolean {
  return apiCache.has(cacheKeys.albums());
}

export function getCachedAlbumDetail(albumId: string): AlbumDetail | null {
  return apiCache.get<AlbumDetail>(cacheKeys.albumImages(albumId));
}

export function hasCachedAlbumDetail(albumId: string): boolean {
  return apiCache.has(cacheKeys.albumImages(albumId));
}

export function getCachedCalendarEvents(
  params: EventsQueryParams = {}
): CalendarEvent[] | null {
  return apiCache.get<CalendarEvent[]>(
    cacheKeys.calendarEvents(buildEventsQueryKey(params))
  );
}

export function hasCachedCalendarEvents(
  params: EventsQueryParams = {}
): boolean {
  return apiCache.has(cacheKeys.calendarEvents(buildEventsQueryKey(params)));
}

export async function loadAlbums(force = false): Promise<Album[]> {
  const key = cacheKeys.albums();

  if (force) {
    apiCache.invalidate(key);
  }

  return apiCache.getOrSet(key, () => fetchAlbums(), ALBUMS_CACHE_TTL_MS);
}

export async function loadAlbumDetail(
  albumId: string,
  force = false
): Promise<AlbumDetail> {
  const key = cacheKeys.albumImages(albumId);

  if (force) {
    apiCache.invalidate(key);
  }

  const cachedAlbums = getCachedAlbums() || [];

  const album = await apiCache.getOrSet(
    key,
    () => fetchAlbumDetail(albumId, cachedAlbums),
    ALBUM_IMAGES_CACHE_TTL_MS
  );

  syncAlbumImageCount(albumId, album.images.length);

  return album;
}

export function prefetchAlbumDetail(albumId: string): void {
  if (!albumId || hasCachedAlbumDetail(albumId)) {
    return;
  }

  loadAlbumDetail(albumId).catch(() => {
    // Prefetch failures are non-blocking.
  });
}

export async function loadCalendarEvents(
  params: EventsQueryParams = {},
  force = false
): Promise<CalendarEvent[]> {
  const key = cacheKeys.calendarEvents(buildEventsQueryKey(params));

  if (force) {
    apiCache.invalidate(key);
  }

  return apiCache.getOrSet(
    key,
    () => fetchCalendarEvents(params),
    EVENTS_CACHE_TTL_MS
  );
}

export function invalidateAlbumCache(albumId: string): void {
  apiCache.invalidate(cacheKeys.albumImages(albumId));
}

export function invalidateGalleryCache(): void {
  apiCache.invalidateByPrefix(cachePrefixes.gallery());
}

export function invalidateCalendarCache(): void {
  apiCache.invalidateByPrefix(cachePrefixes.calendar());
}

export function getCachedStudentBirthdays(): StudentBirthday[] | null {
  return apiCache.get<StudentBirthday[]>(cacheKeys.studentBirthdays());
}

export function hasCachedStudentBirthdays(): boolean {
  return apiCache.has(cacheKeys.studentBirthdays());
}

export function getCachedBoardToppers(classLevel: 10 | 12): BoardTopper[] | null {
  return apiCache.get<BoardTopper[]>(cacheKeys.boardToppers(classLevel));
}

export function hasCachedBoardToppers(classLevel: 10 | 12): boolean {
  return apiCache.has(cacheKeys.boardToppers(classLevel));
}

export async function loadStudentBirthdays(
  force = false
): Promise<StudentBirthday[]> {
  const key = cacheKeys.studentBirthdays();

  if (force) {
    apiCache.invalidate(key);
  }

  return apiCache.getOrSet(
    key,
    () => fetchStudentBirthdays(),
    HIGHLIGHTS_CACHE_TTL_MS
  );
}

export async function loadBoardToppers(
  classLevel: 10 | 12,
  force = false
): Promise<BoardTopper[]> {
  const key = cacheKeys.boardToppers(classLevel);

  if (force) {
    apiCache.invalidate(key);
  }

  const loader =
    classLevel === 10 ? fetchClassXToppers : fetchClassXiiToppers;

  return apiCache.getOrSet(key, () => loader(), HIGHLIGHTS_CACHE_TTL_MS);
}

export function invalidateHighlightsCache(): void {
  apiCache.invalidate(cacheKeys.studentBirthdays());
  apiCache.invalidate(cacheKeys.boardToppers(10));
  apiCache.invalidate(cacheKeys.boardToppers(12));
}

export function clearPublicApiCache(): void {
  apiCache.invalidateByPrefix(cachePrefixes.all());
}

export { apiCache };
