import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import ModalVideo from 'react-modal-video';
import { useVideoContext } from '../../context/VideoContext';
import SingleBanner from './SingleBanner';
import sliderImg3 from '../../assets/new-images/Home-page/banners/banner-1.jpg';

const sliderImg1 = '/custom/home-5/1.svg';
const sliderImg2 = '/custom/home-5/2.svg';

const BannerSlider = () => {
  const { swiperRef, isOpen, setOpen, videoId, startAutoplay, stopAutoplay } =
    useVideoContext();

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, [swiperRef]);

  const sliderOption = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },
    effect: 'fade',
  };

  return (
    <div className="swiper-container ed-slider-3-active">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => {
          setOpen(false);
          startAutoplay();
        }}
      />
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, EffectFade]}
        {...sliderOption}
        className="swiper-wrapper"
        onSlideChange={() => {
          stopAutoplay();
        }}
        onSlideChangeTransitionEnd={() => {
          startAutoplay();
        }}
      >
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg1} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg2} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
