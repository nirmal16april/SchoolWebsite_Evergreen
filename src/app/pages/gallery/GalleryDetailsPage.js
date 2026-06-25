import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';
import { useAlbumDetail } from '../../../hooks/useGallery';

import ImageGrid from './components/ImageGrid';
import GalleryModal from './components/GalleryModal';
import {
  GalleryEmpty,
  GalleryError,
  GalleryLoading,
} from './components/GalleryStatus';

const GalleryDetailsPage = () => {
  const { albumId } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const { data: album, isLoading, isError, error, refetch } =
    useAlbumDetail(albumId, { skip: !albumId });

  const isNotFound = isError && error?.status === 404;

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleCloseModal = () => {
    setActiveIndex(null);
  };

  return (
    <main>
      <Breadcrumb
        title={album?.title || 'Album Details'}
        subTitle="Gallery"
      />

      <section className="it-gallery-details-area pt-90 pb-120">
        <div className="container">
          <div className="it-gallery-details__header mb-40">
            <Link to="/gallery" className="it-gallery-details__back">
              <i className="fa-light fa-arrow-left"></i> Back to Gallery
            </Link>
          </div>

          {isLoading && <GalleryLoading message="Loading album photos…" />}

          {isError && !isNotFound && (
            <GalleryError
              message="This album could not be loaded. It may have been removed or is temporarily unavailable."
              retry={refetch}
            />
          )}

          {isNotFound && (
            <GalleryEmpty
              title="Album not found"
              message="The album you are looking for does not exist or may have been moved."
              showBackLink
            />
          )}

          {!isLoading && !isError && album && (
            <>
              <div className="it-gallery-details__title-box mb-40">
                <h2 className="it-gallery-details__title">{album.title}</h2>
                <p className="it-gallery-details__count mb-0">
                  <i className="fa-light fa-image"></i>{' '}
                  {album.images.length}{' '}
                  {album.images.length === 1 ? 'Photo' : 'Photos'}
                </p>
              </div>

              {album.images.length === 0 ? (
                <GalleryEmpty
                  title="No photos in this album"
                  message="Photos for this album will be added soon."
                  showBackLink
                />
              ) : (
                <ImageGrid
                  images={album.images}
                  onImageClick={handleImageClick}
                />
              )}

              {activeIndex !== null && (
                <GalleryModal
                  images={album.images}
                  activeIndex={activeIndex}
                  onClose={handleCloseModal}
                  onNavigate={setActiveIndex}
                />
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default GalleryDetailsPage;
