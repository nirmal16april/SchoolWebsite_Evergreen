import React, { useEffect } from 'react';

import { useGetCalendarEventByIdQuery } from '../../../../store/api/calendarApi';
import {
  formatEventDateRange,
  getEventBadgeClass,
  getEventTypeLabel,
} from '../utils/eventHelpers';
import { CalendarLoading } from './CalendarStatus';

const EventModal = ({ eventId, onClose }) => {
  const { data: event, isLoading, isError } = useGetCalendarEventByIdQuery(
    eventId,
    { skip: !eventId }
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!eventId) {
    return null;
  }

  return (
    <div
      className="it-calendar-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Event details"
    >
      <button
        type="button"
        className="it-calendar-modal__backdrop"
        onClick={onClose}
        aria-label="Close event details"
      />

      <div className="it-calendar-modal__content">
        <button
          type="button"
          className="it-calendar-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fa-light fa-xmark"></i>
        </button>

        {isLoading && (
          <div className="it-calendar-modal__loading">
            <CalendarLoading message="Loading event details…" />
          </div>
        )}

        {isError && (
          <div className="it-calendar-modal__error">
            <i className="fa-light fa-circle-exclamation" />
            <p>Unable to load event details. Please try again.</p>
            <button type="button" className="ed-btn-theme theme-2" onClick={onClose}>
              Close
            </button>
          </div>
        )}

        {!isLoading && !isError && event && (
          <>
            <div className="it-calendar-modal__header">
              <span
                className={`it-calendar-badge ${getEventBadgeClass(event.eventType)}`}
              >
                {getEventTypeLabel(event.eventType)}
              </span>
              <h3 className="it-calendar-modal__title">{event.title}</h3>
            </div>

            <div className="it-calendar-modal__meta">
              <div className="it-calendar-modal__meta-item">
                <i className="fa-light fa-calendar-days"></i>
                <div>
                  <span className="it-calendar-modal__meta-label">Date</span>
                  <span>
                    {formatEventDateRange(event.startDate, event.endDate)}
                  </span>
                </div>
              </div>

              {event.location && (
                <div className="it-calendar-modal__meta-item">
                  <i className="fa-light fa-location-dot"></i>
                  <div>
                    <span className="it-calendar-modal__meta-label">Location</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              )}

              {event.academicYear && (
                <div className="it-calendar-modal__meta-item">
                  <i className="fa-light fa-graduation-cap"></i>
                  <div>
                    <span className="it-calendar-modal__meta-label">
                      Academic Year
                    </span>
                    <span>{event.academicYear}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="it-calendar-modal__body">
              <h4>Description</h4>
              <p>{event.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventModal;
