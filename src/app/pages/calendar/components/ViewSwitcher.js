import React from 'react';

const ViewSwitcher = ({ activeView, onViewChange }) => {
  return (
    <div className="it-calendar-view-switcher" role="tablist" aria-label="Calendar view">
      <button
        type="button"
        role="tab"
        aria-selected={activeView === 'calendar'}
        className={`it-calendar-view-switcher__btn${
          activeView === 'calendar' ? ' it-calendar-view-switcher__btn--active' : ''
        }`}
        onClick={() => onViewChange('calendar')}
      >
        <i className="fa-light fa-calendar"></i>
        Calendar View
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeView === 'list'}
        className={`it-calendar-view-switcher__btn${
          activeView === 'list' ? ' it-calendar-view-switcher__btn--active' : ''
        }`}
        onClick={() => onViewChange('list')}
      >
        <i className="fa-light fa-list"></i>
        List View
      </button>
    </div>
  );
};

export default ViewSwitcher;
