export type CalendarEventType =
  | 'holiday'
  | 'exam'
  | 'event'
  | 'admission'
  | 'important';

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  eventType: CalendarEventType;
  location: string | null;
  academicYear: string;
}

export interface EventsQueryParams {
  fromMonth?: number;
  toMonth?: number;
  search?: string;
  category?: string;
}
