import React from 'react';

import {
  formatEventDateRange,
  getEventBadgeClass,
  getEventTypeLabel,
} from '../utils/eventHelpers';

const EventCard = ({ event, onSelect }) => {
  const { title, description, startDate, endDate, eventType } = event;

  return (
    <article className="it-calendar-event-card">
      <button
        type="button"
        className="it-calendar-event-card__inner"
        onClick={() => onSelect(event.id)}
      >
        <div className="it-calendar-event-card__header">
          <span className={`it-calendar-badge ${getEventBadgeClass(eventType)}`}>
            {getEventTypeLabel(eventType)}
          </span>
          <span className="it-calendar-event-card__date">
            <i className="fa-light fa-calendar-days"></i>
            {formatEventDateRange(startDate, endDate)}
          </span>
        </div>
        <h4 className="it-calendar-event-card__title">{title}</h4>
        <p className="it-calendar-event-card__desc">{description}</p>
        <span className="it-calendar-event-card__more">
          View details <i className="fa-light fa-arrow-right"></i>
        </span>
      </button>
    </article>
  );
};

export default EventCard;
