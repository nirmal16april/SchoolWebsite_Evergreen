import { WEBSITE_KEY } from '../constants/website';
import { CalendarEvent, EventsQueryParams } from '../types/calendar';
import { apiClient } from './axios';
import { mapCalendarEventsResponse } from './mappers/calendarMapper';

/** Academic session runs April → March for the public events API. */
export const DEFAULT_EVENTS_FROM_MONTH = 4;
export const DEFAULT_EVENTS_TO_MONTH = 3;

function buildEventsQueryParams(
  params: EventsQueryParams = {}
): Record<string, string | number> {
  const query: Record<string, string | number> = {
    fromMonth: params.fromMonth ?? DEFAULT_EVENTS_FROM_MONTH,
    toMonth: params.toMonth ?? DEFAULT_EVENTS_TO_MONTH,
  };

  if (params.search?.trim()) {
    query.search = params.search.trim();
  }

  if (params.category?.trim()) {
    query.category = params.category.trim();
  }

  return query;
}

export async function fetchCalendarEvents(
  params: EventsQueryParams = {}
): Promise<CalendarEvent[]> {
  const response = await apiClient.get(
    `/api/academics/public/${WEBSITE_KEY}/events`,
    {
      params: buildEventsQueryParams(params),
    }
  );

  return mapCalendarEventsResponse(response.data);
}

export function findCalendarEventById(
  events: CalendarEvent[],
  eventId: number | string
): CalendarEvent | null {
  const id = String(eventId).trim();

  if (!id) {
    return null;
  }

  return events.find((event) => event.id === id) || null;
}
