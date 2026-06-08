import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import SectionTitle from '../../../components/SectionTitle';
import { useGetAlbumsQuery } from '../../../store/api/galleryApi';

import AlbumCard from './components/AlbumCard';
import {
  GalleryEmpty,
  GalleryError,
  GalleryLoading,
} from './components/GalleryStatus';

import titleImg from '../../../assets/img/about/title-home2.png';

const GalleryPage = () => {
  const { data: albums, isLoading, isError, refetch } = useGetAlbumsQuery();

  return (
    <main>
      <Breadcrumb title="Photo Gallery" subTitle="Gallery" />

      <section className="it-gallery-area pt-90 pb-120">
        <div className="container">
          <SectionTitle
            itemClass="it-gallery-title-box text-center mb-50"
            subTitleClass="it-section-subtitle-3 d-inline-flex align-items-center justify-content-center"
            subTitle="Our Memories"
            titleClass="it-section-title-3"
            title="School Events & Activities"
            titleImage={titleImg}
            description="Browse photo albums from annual functions, sports days, celebrations, and other memorable moments at Ever Green Senior Secondary School."
          />

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
