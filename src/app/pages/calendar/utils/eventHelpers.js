import {
  format,
  parseISO,
  isWithinInterval,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from 'date-fns';

export const EVENT_TYPE_CONFIG = {
  all: { label: 'All Events', badgeClass: 'it-calendar-badge--default' },
  holiday: { label: 'Holidays', badgeClass: 'it-calendar-badge--holiday' },
  exam: { label: 'Exams', badgeClass: 'it-calendar-badge--exam' },
  event: { label: 'Activities', badgeClass: 'it-calendar-badge--activity' },
  admission: { label: 'Admissions', badgeClass: 'it-calendar-badge--admission' },
  important: {
    label: 'Important Dates',
    badgeClass: 'it-calendar-badge--important',
  },
};

export const FILTER_OPTIONS = [
  { value: 'all', label: 'All Events' },
  { value: 'holiday', label: 'Holidays' },
  { value: 'exam', label: 'Exams' },
  { value: 'event', label: 'Activities' },
  { value: 'admission', label: 'Admissions' },
  { value: 'important', label: 'Important Dates' },
];

export const formatEventDate = (dateString) => {
  try {
    return format(parseISO(dateString), 'dd MMM yyyy');
  } catch {
    return dateString;
  }
};

export const formatEventDateRange = (startDate, endDate) => {
  if (startDate === endDate) {
    return formatEventDate(startDate);
  }
  return `${formatEventDate(startDate)} – ${formatEventDate(endDate)}`;
};

export const getEventTypeLabel = (eventType) =>
  EVENT_TYPE_CONFIG[eventType]?.label || eventType;

export const getEventBadgeClass = (eventType) =>
  EVENT_TYPE_CONFIG[eventType]?.badgeClass || 'it-calendar-badge--default';

export const filterEventsByType = (events, filterType) => {
  if (!events) return [];
  if (filterType === 'all') return events;
  return events.filter((event) => event.eventType === filterType);
};

export const isEventOnDate = (event, date) => {
  try {
    const start = parseISO(event.startDate);
    const end = parseISO(event.endDate);
    return isWithinInterval(date, { start, end });
  } catch {
    return false;
  }
};

export const getEventsForDate = (events, date) =>
  events.filter((event) => isEventOnDate(event, date));

export const getMonthCalendarDays = (monthDate) => {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  const startDay = monthStart.getDay();
  const leadingEmpty = Array.from({ length: startDay }, (_, i) => ({
    date: null,
    key: `empty-start-${i}`,
  }));
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd }).map(
    (date) => ({ date, key: format(date, 'yyyy-MM-dd') })
  );
  const totalCells = leadingEmpty.length + days.length;
  const trailingCount = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  const trailingEmpty = Array.from({ length: trailingCount }, (_, i) => ({
    date: null,
    key: `empty-end-${i}`,
  }));

  return [...leadingEmpty, ...days, ...trailingEmpty];
};

export const groupEventsByMonth = (events) => {
  const groups = {};

  events.forEach((event) => {
    try {
      const monthKey = format(parseISO(event.startDate), 'MMMM yyyy');
      if (!groups[monthKey]) {
        groups[monthKey] = {
          label: monthKey,
          sortKey: parseISO(event.startDate).getTime(),
          events: [],
        };
      }
      groups[monthKey].events.push(event);
    } catch {
      // skip invalid dates
    }
  });

  return Object.values(groups).sort((a, b) => a.sortKey - b.sortKey);
};

export {
  format,
  parseISO,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  startOfMonth,
};
