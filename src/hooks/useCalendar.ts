import { useCallback, useEffect, useMemo, useState } from 'react';

import { findCalendarEventById } from '../api/calendar';
import {
  getCachedCalendarEvents,
  hasCachedCalendarEvents,
  loadCalendarEvents,
} from '../api/cache';
import { toApiRequestError } from '../api/utils/responseUtils';
import { ApiRequestError, QueryState } from '../types/api';
import { CalendarEvent } from '../types/calendar';

function createInitialState<T>(cachedData?: T): Omit<QueryState<T>, 'refetch'> {
  return {
    data: cachedData,
    isLoading: !cachedData,
    isFetching: false,
    isError: false,
    error: null,
  };
}

export function useCalendarEvents(): QueryState<CalendarEvent[]> {
  const [state, setState] = useState<Omit<QueryState<CalendarEvent[]>, 'refetch'>>(
    () => createInitialState(getCachedCalendarEvents() || undefined)
  );

  const load = useCallback(async (force = false) => {
    if (!force && hasCachedCalendarEvents()) {
      const cachedEvents = getCachedCalendarEvents();

      if (cachedEvents) {
        setState({
          data: cachedEvents,
          isLoading: false,
          isFetching: false,
          isError: false,
          error: null,
        });
        return;
      }
    }

    setState((current) => ({
      ...current,
      isLoading: !current.data,
      isFetching: true,
      isError: false,
      error: null,
    }));

    try {
      const events = await loadCalendarEvents({}, force);
      setState({
        data: events,
        isLoading: false,
        isFetching: false,
        isError: false,
        error: null,
      });
    } catch (error) {
      const apiError = toApiRequestError(error);
      setState((current) => ({
        data: current.data,
        isLoading: false,
        isFetching: false,
        isError: true,
        error: apiError,
      }));
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    ...state,
    refetch: () => load(true),
  };
}

interface CalendarEventByIdState {
  data?: CalendarEvent;
  isLoading: boolean;
  isError: boolean;
  error: ApiRequestError | null;
}

export function useCalendarEventById(
  eventId?: number | string | null
): CalendarEventByIdState {
  const { data: events, isLoading, isError, error } = useCalendarEvents();

  const event = useMemo(() => {
    if (!eventId || !events) {
      return undefined;
    }

    return findCalendarEventById(events, eventId) || undefined;
  }, [eventId, events]);

  const isNotFound = !isLoading && !isError && !!eventId && !!events && !event;

  return {
    data: event,
    isLoading,
    isError: isError || isNotFound,
    error: isNotFound
      ? new ApiRequestError('Event not found.', 404)
      : error,
  };
}
