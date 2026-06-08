import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SingleTestimonial from '../../components/Testimonial';

import testimonialBG from '../../assets/img/testimonial/testimonial-bg.jpg';

const Testimonial = () => {
  const sliderOption = {
    speed: 1500,
    loop: true,
    slidesPerView: '3',
    spaceBetween: 50,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div
      className="it-testimonial-area ed-testimonial-ptb fix p-relative"
      style={{ backgroundImage: `url(${testimonialBG})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ed-testimonial-wrapper">
              <div className="swiper-container">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOption}
                  className="swiper-wrapper ed-testimonial-active"
                >
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonial
                      description={`“Our children feel loved, safe, and are learning and
                          growing in spiritual and academic areas of their life.
                          The faculty and administration are wonderful and
                          dedicated.”`}
                      authorName="Mr. Sandeep"
                      designation="Father"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonial
                      description={`“Ever Green Sr. Sec. School gives parents so many
                          opportunities to be involved with their kids in many
                          aspects of their education and school functions.”`}
                      authorName="Mrs. Riya"
                      designation="Mother"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonial
                      description={`“Ever Green Sr. Sec. School has a strong sense of
                          community, high standards for academics, and
                          well-mannered students. It is academically challenging,
                          while also emphasizing good choices and respect for
                          others.”`}
                      authorName="Mrs. Natasha"
                      designation="Mother"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonial
                      description={`“I respect and admire the teachers and staff at Ever
                          Green Sr. Sec. School. My children were always given
                          priority, encouragement, and support throughout their
                          academic development, and every teacher was approachable.”`}
                      authorName="Mr. Vivek"
                      designation="Father"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
