import { CalendarEvent, CalendarEventType } from '../../types/calendar';
import {
  normalizeDate,
  readId,
  readString,
  unwrapListPayload,
} from '../utils/responseUtils';

const EVENT_TYPE_ALIASES: Record<string, CalendarEventType> = {
  holiday: 'holiday',
  holidays: 'holiday',
  exam: 'exam',
  exams: 'exam',
  examination: 'exam',
  examinations: 'exam',
  event: 'event',
  activity: 'event',
  activities: 'event',
  admission: 'admission',
  admissions: 'admission',
  important: 'important',
  meeting: 'important',
  meetings: 'important',
  'important date': 'important',
  'important dates': 'important',
};

function normalizeEventType(value: unknown): CalendarEventType {
  if (typeof value !== 'string') {
    return 'event';
  }

  const normalized = value.trim().toLowerCase();
  return EVENT_TYPE_ALIASES[normalized] || 'event';
}

function mapCalendarEventItem(item: unknown): CalendarEvent | null {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const source = item as Record<string, unknown>;
  const id = readId(source, ['id', 'eventId', 'calendarEventId']);

  if (!id) {
    return null;
  }

  const startDate = normalizeDate(
    readString(source, ['startDate', 'start_date', 'fromDate', 'eventStartDate'])
  );
  const endDate = normalizeDate(
    readString(source, ['endDate', 'end_date', 'toDate', 'eventEndDate'], startDate)
  );

  return {
    id,
    title: readString(source, ['title', 'name', 'eventTitle', 'eventName'], 'Untitled Event'),
    description: readString(source, ['description', 'details', 'summary', 'content']),
    startDate: startDate || endDate,
    endDate: endDate || startDate,
    eventType: normalizeEventType(
      source.calendarItemType ??
        source.eventType ??
        source.type ??
        source.category ??
        source.eventCategory
    ),
    location: readString(source, ['location', 'venue', 'place']) || null,
    academicYear: readString(source, ['academicYear', 'academic_year', 'session']),
  };
}

export function mapCalendarEventsResponse(data: unknown): CalendarEvent[] {
  return unwrapListPayload(data)
    .map(mapCalendarEventItem)
    .filter((event): event is CalendarEvent => event !== null);
}

export function mapUiFilterToApiCategory(
  filter: string
): string | undefined {
  if (!filter || filter === 'all') {
    return undefined;
  }

  return filter.toUpperCase();
}
