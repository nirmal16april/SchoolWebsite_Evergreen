import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import { useGetAlbumsQuery } from '../../../store/api/galleryApi';

import AlbumCard from './components/AlbumCard';
import {
  GalleryEmpty,
  GalleryError,
  GalleryLoading,
} from './components/GalleryStatus';

const GalleryPage = () => {
  const { data: albums, isLoading, isError, refetch } = useGetAlbumsQuery();

  return (
    <main>
      <Breadcrumb title="Photo Gallery" subTitle="Gallery" />

      <section className="it-gallery-area pt-90 pb-120">
        <div className="container">
          {isLoading && <GalleryLoading message="Loading photo albums…" />}

          {isError && (
            <GalleryError
              message="We could not load the gallery albums right now. Please try again."
              retry={refetch}
            />
          )}

          {!isLoading && !isError && albums?.length === 0 && (
            <GalleryEmpty />
          )}

          {!isLoading && !isError && albums?.length > 0 && (
            <div className="row">
              {albums.map((album) => (
                <div
                  key={album.id}
                  className="col-xl-4 col-lg-4 col-md-6 mb-30"
                >
                  <AlbumCard album={album} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
