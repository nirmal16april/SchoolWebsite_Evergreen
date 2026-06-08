import React from 'react';

const ImageGrid = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="it-gallery-grid">
      <div className="row">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 mb-30"
          >
            <button
              type="button"
              className="it-gallery-grid__item"
              onClick={() => onImageClick(index)}
              aria-label={`View photo ${index + 1} of ${images.length}`}
            >
              <img
                src={image.url}
                alt={`Gallery photo ${index + 1}`}
                loading="lazy"
                className="it-gallery-grid__image"
              />
              <span className="it-gallery-grid__zoom">
                <i className="fa-light fa-magnifying-glass-plus"></i>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
