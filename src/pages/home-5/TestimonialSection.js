import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../../components/SectionTitle';
import SingleTestimonialThree from '../../components/Testimonial/SingleTestimonialThree';

import avatarImg1 from '../../assets/img/testimonial/avatar-1-1.png';
import avatarImg2 from '../../assets/img/testimonial/avatar-1-2.png';
import avatarImg3 from '../../assets/img/testimonial/avatar-1-3.png';

const Testimonial = () => {
  const sliderOption = {
    speed: 1500,
    loop: true,
    slidesPerView: '3',
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1400: {
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
    <div className="it-testimonial-area ed-testimonial-style-2 pt-120 pb-120 fix p-relative">
      <div className="container">
        <div className="it-testimonial-title-wrap mb-65">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <SectionTitle
                itemClass="it-testimonial-title-box text-center"
                subTitleClass="ed-section-subtitle"
                subTitle="Testimonials"
                titleClass="ed-section-title"
                title="Happy Parents"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ed-testimonial-wrapper">
              <div className="swiper-container ed-testimonial-active">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`Ever Green Sr. Sec. School has a strong sense of community, high standards for academics, and well-mannered students. The school is academically challenging and emphasizes being a good person.`}
                      authorAvatar={avatarImg1}
                      authorName="Parent Review"
                      designation="Ever Green School"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`Our children feel loved, safe, and are learning and growing in both spiritual and academic areas. The faculty and administration are wonderful and dedicated.`}
                      authorAvatar={avatarImg2}
                      authorName="Parent Review"
                      designation="Ever Green School"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`Ever Green gives parents many opportunities to be involved in their children's education and school functions.`}
                      authorAvatar={avatarImg3}
                      authorName="Parent Review"
                      designation="Ever Green School"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`I respect and admire the teachers and staff. My children have always received priority, encouragement, and support throughout their academic development.`}
                      authorAvatar={avatarImg1}
                      authorName="Parent Review"
                      designation="Ever Green School"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`Ever Green is truly one of the best learning centres for children with a focus on scholastic excellence and overall personality development.`}
                      authorAvatar={avatarImg2}
                      authorName="Parent Review"
                      designation="Ever Green School"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonialThree
                      description={`A caring environment, disciplined culture, and quality teaching make this school a trusted choice for families in Haldwani and nearby areas.`}
                      authorAvatar={avatarImg1}
                      authorName="Parent Review"
                      designation="Ever Green School"
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
