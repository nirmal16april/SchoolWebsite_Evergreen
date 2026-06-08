import React from 'react';

export const CalendarLoading = ({ message = 'Loading calendar…' }) => (
  <div className="it-calendar-status it-calendar-status--loading">
    <div className="it-calendar-status__spinner" role="status" aria-label="Loading">
      <span className="it-calendar-status__spinner-ring" />
    </div>
    <p>{message}</p>
  </div>
);

export const CalendarError = ({
  message = 'Something went wrong while loading the calendar.',
  retry,
}) => (
  <div className="it-calendar-status it-calendar-status--error">
    <i className="fa-light fa-circle-exclamation it-calendar-status__icon" />
    <h4>Unable to load calendar</h4>
    <p>{message}</p>
    {retry && (
      <button type="button" className="ed-btn-theme theme-2" onClick={retry}>
        Try Again
      </button>
    )}
  </div>
);

export const CalendarEmpty = ({
  title = 'No events scheduled',
  message = 'Academic calendar events will appear here once they are published.',
}) => (
  <div className="it-calendar-status it-calendar-status--empty">
    <i className="fa-light fa-calendar-days it-calendar-status__icon" />
    <h4>{title}</h4>
    <p>{message}</p>
  </div>
);
