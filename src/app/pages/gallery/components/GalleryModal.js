import React, { useCallback, useEffect } from 'react';

const GalleryModal = ({ images, activeIndex, onClose, onNavigate }) => {
  const total = images.length;
  const current = images[activeIndex];

  const goPrev = useCallback(() => {
    if (activeIndex > 0) {
      onNavigate(activeIndex - 1);
    }
  }, [activeIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex < total - 1) {
      onNavigate(activeIndex + 1);
    }
  }, [activeIndex, onNavigate, total]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowLeft') {
        goPrev();
      }
      if (event.key === 'ArrowRight') {
        goNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goNext, goPrev, onClose]);

  if (!current) {
    return null;
  }

  return (
    <div
      className="it-gallery-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        type="button"
        className="it-gallery-modal__backdrop"
        onClick={onClose}
        aria-label="Close preview"
      />

      <div className="it-gallery-modal__content">
        <button
          type="button"
          className="it-gallery-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fa-light fa-xmark"></i>
        </button>

        <div className="it-gallery-modal__counter">
          {activeIndex + 1} / {total}
        </div>

        <div className="it-gallery-modal__stage">
          <img
            src={current.url}
            alt={`Gallery photo ${activeIndex + 1}`}
            className="it-gallery-modal__image"
          />
        </div>

        {activeIndex > 0 && (
          <button
            type="button"
            className="it-gallery-modal__nav it-gallery-modal__nav--prev"
            onClick={goPrev}
            aria-label="Previous photo"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
        )}

        {activeIndex < total - 1 && (
          <button
            type="button"
            className="it-gallery-modal__nav it-gallery-modal__nav--next"
            onClick={goNext}
            aria-label="Next photo"
          >
            <i className="fa-light fa-angle-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default GalleryModal;
