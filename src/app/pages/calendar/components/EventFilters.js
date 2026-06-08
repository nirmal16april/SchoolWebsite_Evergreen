import React from 'react';

import { FILTER_OPTIONS } from '../utils/eventHelpers';

const EventFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="it-calendar-filters">
      <span className="it-calendar-filters__label">
        <i className="fa-light fa-filter"></i> Filter:
      </span>
      <div className="it-calendar-filters__list">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`it-calendar-filters__btn${
              activeFilter === option.value
                ? ' it-calendar-filters__btn--active'
                : ''
            }`}
            onClick={() => onFilterChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventFilters;
