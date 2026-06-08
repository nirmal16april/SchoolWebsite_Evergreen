import React from 'react';
import { Link } from 'react-router-dom';

export const GalleryLoading = ({ message = 'Loading gallery…' }) => (
  <div className="it-gallery-status it-gallery-status--loading">
    <div className="it-gallery-status__spinner" role="status" aria-label="Loading">
      <span className="it-gallery-status__spinner-ring" />
    </div>
    <p>{message}</p>
  </div>
);

export const GalleryError = ({
  message = 'Something went wrong while loading the gallery.',
  retry,
}) => (
  <div className="it-gallery-status it-gallery-status--error">
    <i className="fa-light fa-circle-exclamation it-gallery-status__icon" />
    <h4>Unable to load gallery</h4>
    <p>{message}</p>
    {retry && (
      <button type="button" className="ed-btn-theme theme-2" onClick={retry}>
        Try Again
      </button>
    )}
  </div>
);

export const GalleryEmpty = ({
  title = 'No albums yet',
  message = 'Photo albums will appear here once they are published.',
  showBackLink = false,
}) => (
  <div className="it-gallery-status it-gallery-status--empty">
    <i className="fa-light fa-images it-gallery-status__icon" />
    <h4>{title}</h4>
    <p>{message}</p>
    {showBackLink && (
      <Link className="ed-btn-theme theme-2" to="/gallery">
        Back to Gallery
      </Link>
    )}
  </div>
);
