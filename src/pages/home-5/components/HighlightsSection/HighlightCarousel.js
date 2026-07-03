import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import NextArrow from '../../../../components/SVG/NextArrow';
import PrevArrow from '../../../../components/SVG/PrevArrow';
import RightArrow from '../../../../components/SVG';

import {
  HighlightsEmpty,
  HighlightsError,
  HighlightsLoading,
} from './HighlightsStatus';
import HighlightIllustration from './HighlightIllustration';

const sliderOptions = {
  speed: 900,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
};

const HighlightCarousel = ({
  title,
  iconClass,
  theme = 'default',
  items,
  isLoading,
  isError,
  refetch,
  renderSlide,
  actionLink,
  actionLabel = 'View all',
  buttonClass = 'ed-btn-theme',
  emptyMessage,
  loadingMessage,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const hasItems = Array.isArray(items) && items.length > 0;

  return (
    <div
      className={`evergreen-highlight-carousel evergreen-highlight-carousel--theme-${theme}`}
    >
      <HighlightIllustration theme={theme} />
      <div className="evergreen-highlight-carousel__header">
        <div className="evergreen-highlight-carousel__title-wrap">
          <span className="evergreen-highlight-carousel__icon" aria-hidden="true">
            <i className={iconClass} />
          </span>
          <h3 className="evergreen-highlight-carousel__title">{title}</h3>
        </div>
      </div>

      <div className="evergreen-highlight-carousel__body">
        {isLoading && (
          <HighlightsLoading message={loadingMessage || `Loading ${title}…`} />
        )}

        {!isLoading && isError && (
          <HighlightsError
            message={`We could not load ${title.toLowerCase()} right now.`}
            retry={refetch}
          />
        )}

        {!isLoading && !isError && !hasItems && (
          <HighlightsEmpty message={emptyMessage} />
        )}

        {!isLoading && !isError && hasItems && (
          <div className="evergreen-highlight-carousel__slider-wrap">
            <button
              ref={prevRef}
              type="button"
              className="evergreen-highlight-carousel__nav-btn evergreen-highlight-carousel__nav-btn--prev"
              aria-label={`Previous slide for ${title}`}
            >
              <PrevArrow />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              {...sliderOptions}
              className="evergreen-highlight-swiper"
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSwiper={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={item.id}>
                  {renderSlide(item, index)}
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={nextRef}
              type="button"
              className="evergreen-highlight-carousel__nav-btn evergreen-highlight-carousel__nav-btn--next"
              aria-label={`Next slide for ${title}`}
            >
              <NextArrow />
            </button>
          </div>
        )}
      </div>

      {actionLink ? (
        <div className="evergreen-highlight-carousel__footer text-center">
          <Link className={buttonClass} to={actionLink}>
            {actionLabel}
            <i>
              <RightArrow />
            </i>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default HighlightCarousel;
