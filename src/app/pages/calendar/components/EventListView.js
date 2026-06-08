import React from 'react';

import EventCard from './EventCard';
import { CalendarEmpty } from './CalendarStatus';
import { groupEventsByMonth } from '../utils/eventHelpers';

const EventListView = ({ events, onEventSelect }) => {
  if (!events || events.length === 0) {
    return (
      <CalendarEmpty
        title="No events match your filter"
        message="Try selecting a different event type or check back later for updates."
      />
    );
  }

  const grouped = groupEventsByMonth(events);

  return (
    <div className="it-calendar-list">
      {grouped.map((group) => (
        <div key={group.label} className="it-calendar-list__group">
          <h3 className="it-calendar-list__month">
            <i className="fa-light fa-calendar"></i> {group.label}
          </h3>
          <div className="row">
            {group.events.map((event) => (
              <div
                key={event.id}
                className="col-xl-6 col-lg-6 col-md-12 mb-30"
              >
                <EventCard event={event} onSelect={onEventSelect} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventListView;
