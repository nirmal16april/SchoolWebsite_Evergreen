import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import { prefetchAlbumDetail } from '../../../../api/cache';

const formatAlbumDate = (dateString) => {
  try {
    return format(parseISO(dateString), 'dd MMM yyyy');
  } catch {
    return dateString;
  }
};

const AlbumCard = ({ album }) => {
  const { id, title, coverImage, totalImages, date } = album;

  const handlePrefetch = useCallback(() => {
    prefetchAlbumDetail(id);
  }, [id]);

  return (
    <article className="it-gallery-album">
      <Link
        to={`/gallery/${id}`}
        className="it-gallery-album__link"
        onMouseEnter={handlePrefetch}
        onFocus={handlePrefetch}
      >
        <div className="it-gallery-album__thumb fix">
          <img
            src={coverImage}
            alt={title}
            loading="lazy"
            className="it-gallery-album__image"
          />
          <div className="it-gallery-album__overlay">
            <span className="it-gallery-album__view">
              <i className="fa-light fa-images"></i> View Album
            </span>
          </div>
        </div>
        <div className="it-gallery-album__content">
          <h4 className="it-gallery-album__title">{title}</h4>
          <div className="it-gallery-album__meta">
            <span>
              <i className="fa-light fa-image"></i>
              {totalImages} {totalImages === 1 ? 'Photo' : 'Photos'}
            </span>
            <span>
              <i className="fa-light fa-calendar-days"></i>
              {formatAlbumDate(date)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default AlbumCard;
