import React from 'react';

export const HighlightsLoading = ({ message = 'Loading…' }) => (
  <div className="evergreen-highlight-status evergreen-highlight-status--loading">
    <div
      className="evergreen-highlight-status__spinner"
      role="status"
      aria-label="Loading"
    >
      <span className="evergreen-highlight-status__spinner-ring" />
    </div>
    <p>{message}</p>
  </div>
);

export const HighlightsError = ({
  message = 'Unable to load this section right now.',
  retry,
}) => (
  <div className="evergreen-highlight-status evergreen-highlight-status--error">
    <i className="fa-light fa-circle-exclamation evergreen-highlight-status__icon" />
    <p>{message}</p>
    {retry && (
      <button type="button" className="ed-btn-theme theme-2" onClick={retry}>
        Try Again
      </button>
    )}
  </div>
);

export const HighlightsEmpty = ({ message = 'No records to display yet.' }) => (
  <div className="evergreen-highlight-status evergreen-highlight-status--empty">
    <i className="fa-light fa-inbox evergreen-highlight-status__icon" />
    <p>{message}</p>
  </div>
);
