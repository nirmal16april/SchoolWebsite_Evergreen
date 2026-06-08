import React, { useMemo, useState } from 'react';

import { CalendarEmpty } from './CalendarStatus';
import {
  addMonths,
  format,
  getEventsForDate,
  getMonthCalendarDays,
  isSameDay,
  isSameMonth,
  subMonths,
} from '../utils/eventHelpers';

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MAX_VISIBLE_EVENTS = 2;

const CalendarView = ({ events, onEventSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const calendarDays = useMemo(
    () => getMonthCalendarDays(currentMonth),
    [currentMonth]
  );

  const today = new Date();

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  const handleToday = () => {
    setCurrentMonth(new Date());
  };

  if (!events || events.length === 0) {
    return (
      <CalendarEmpty
        title="No events this month"
        message="Try adjusting your filter or browse another month using the navigation controls."
      />
    );
  }

  return (
    <div className="it-calendar-month">
      <div className="it-calendar-month__toolbar">
        <button
          type="button"
          className="it-calendar-month__nav"
          onClick={handlePrevMonth}
          aria-label="Previous month"
        >
          <i className="fa-light fa-angle-left"></i>
        </button>

        <div className="it-calendar-month__title-wrap">
          <h3 className="it-calendar-month__title">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
          {!isSameMonth(currentMonth, today) && (
            <button
              type="button"
              className="it-calendar-month__today"
              onClick={handleToday}
            >
              Today
            </button>
          )}
        </div>

        <button
          type="button"
          className="it-calendar-month__nav"
          onClick={handleNextMonth}
          aria-label="Next month"
        >
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>

      <div className="it-calendar-month__grid">
        <div className="it-calendar-month__weekdays">
          {WEEKDAY_LABELS.map((day) => (
            <span key={day} className="it-calendar-month__weekday">
              {day}
            </span>
          ))}
        </div>

        <div className="it-calendar-month__days">
          {calendarDays.map((cell) => {
            if (!cell.date) {
              return (
                <div
                  key={cell.key}
                  className="it-calendar-month__day it-calendar-month__day--empty"
                  aria-hidden="true"
                />
              );
            }

            const dayEvents = getEventsForDate(events, cell.date);
            const isToday = isSameDay(cell.date, today);
            const visibleEvents = dayEvents.slice(0, MAX_VISIBLE_EVENTS);
            const hiddenCount = dayEvents.length - MAX_VISIBLE_EVENTS;

            return (
              <div
                key={cell.key}
                className={`it-calendar-month__day${
                  isToday ? ' it-calendar-month__day--today' : ''
                }`}
              >
                <span className="it-calendar-month__day-num">
                  {format(cell.date, 'd')}
                </span>

                <div className="it-calendar-month__events">
                  {visibleEvents.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      className={`it-calendar-month__event it-calendar-month__event--${event.eventType}`}
                      onClick={() => onEventSelect(event.id)}
                      title={event.title}
                    >
                      {event.title}
                    </button>
                  ))}
                  {hiddenCount > 0 && (
                    <span className="it-calendar-month__more">
                      +{hiddenCount} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
