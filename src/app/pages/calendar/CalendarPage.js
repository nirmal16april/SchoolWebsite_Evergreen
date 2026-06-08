import React, { useMemo, useState } from 'react';

import Breadcrumb from '../../../components/Breadcrumb';
import SectionTitle from '../../../components/SectionTitle';
import { useGetCalendarEventsQuery } from '../../../store/api/calendarApi';

import CalendarView from './components/CalendarView';
import EventListView from './components/EventListView';
import EventFilters from './components/EventFilters';
import EventModal from './components/EventModal';
import ViewSwitcher from './components/ViewSwitcher';
import {
  CalendarEmpty,
  CalendarError,
  CalendarLoading,
} from './components/CalendarStatus';
import { filterEventsByType } from './utils/eventHelpers';

import titleImg from '../../../assets/img/about/title-home2.png';

const CalendarPage = () => {
  const [activeView, setActiveView] = useState('calendar');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedEventId, setSelectedEventId] = useState(null);

  const { data: events, isLoading, isFetching, isError, refetch } =
    useGetCalendarEventsQuery();

  const filteredEvents = useMemo(
    () => filterEventsByType(events, activeFilter),
    [events, activeFilter]
  );

  const handleEventSelect = (eventId) => {
    setSelectedEventId(eventId);
  };

  const handleCloseModal = () => {
    setSelectedEventId(null);
  };

  return (
    <main>
      <Breadcrumb title="Academic Calendar" subTitle="Calendar" />

      <section className="it-calendar-area pt-90 pb-120">
        <div className="container">
          <SectionTitle
            itemClass="it-calendar-title-box text-center mb-50"
            subTitleClass="it-section-subtitle-3 d-inline-flex align-items-center justify-content-center"
            subTitle="Plan Ahead"
            titleClass="it-section-title-3"
            title="Academic Calendar & Important Dates"
            titleImage={titleImg}
            description="Stay informed about holidays, examinations, admissions, school activities, and other important dates throughout the academic year at Ever Green Senior Secondary School."
          />

          {isLoading && (
            <CalendarLoading message="Loading academic calendar…" />
          )}

          {isError && (
            <CalendarError
              message="We could not load the academic calendar right now. Please try again."
              retry={refetch}
            />
          )}

          {!isLoading && !isError && events?.length === 0 && <CalendarEmpty />}

          {!isLoading && !isError && events?.length > 0 && (
            <>
              <div className="it-calendar-toolbar mb-40">
                <ViewSwitcher
                  activeView={activeView}
                  onViewChange={setActiveView}
                />
                <EventFilters
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                />
              </div>

              {isFetching && !isLoading && (
                <p className="it-calendar-refreshing" role="status">
                  <i className="fa-light fa-arrows-rotate"></i> Updating…
                </p>
              )}

              {activeView === 'calendar' && (
                <CalendarView
                  events={filteredEvents}
                  onEventSelect={handleEventSelect}
                />
              )}

              {activeView === 'list' && (
                <EventListView
                  events={filteredEvents}
                  onEventSelect={handleEventSelect}
                />
              )}
            </>
          )}
        </div>
      </section>

      {selectedEventId && (
        <EventModal eventId={selectedEventId} onClose={handleCloseModal} />
      )}
    </main>
  );
};

export default CalendarPage;
