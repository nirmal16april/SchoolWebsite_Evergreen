import { WEBSITE_KEY } from '../../constants/website';

const CACHE_PREFIX = `public:${WEBSITE_KEY}`;

export const cacheKeys = {
  albums: () => `${CACHE_PREFIX}:albums`,
  albumImages: (albumId: string) =>
    `${CACHE_PREFIX}:album-images:${albumId.trim()}`,
  calendarEvents: (queryKey: string) =>
    `${CACHE_PREFIX}:calendar-events:${queryKey}`,
  studentBirthdays: () => `${CACHE_PREFIX}:student-birthdays`,
  boardToppers: (classLevel: number) =>
    `${CACHE_PREFIX}:board-toppers:${classLevel}`,
};

export const cachePrefixes = {
  gallery: () => `${CACHE_PREFIX}:album`,
  calendar: () => `${CACHE_PREFIX}:calendar-events`,
  highlights: () => `${CACHE_PREFIX}:student-birthdays`,
  all: () => CACHE_PREFIX,
};
