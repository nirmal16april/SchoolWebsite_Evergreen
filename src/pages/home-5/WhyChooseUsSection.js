import React from 'react';
import SectionTitle from '../../components/SectionTitle';

import shapeImg1 from '../../assets/img/choose/shape-1-7.png';
import shapeImg2 from '../../assets/img/choose/shape-1-8.png';
import shapeImg3 from '../../assets/img/choose/shape-1-9.png';
import shapeImg4 from '../../assets/img/choose/shape-1-10.png';
import shapeImg5 from '../../assets/img/choose/shape-1-5.png';
import shapeImg6 from '../../assets/img/choose/shape-1-6.png';
import chooseImg from '../../assets/new-images/Home-page/img-3.jpg';

const WhyChooseUs = () => {
  const items = [
    {
      icon: 'flaticon-skill',
      title: 'CBSE Senior Secondary Excellence',
      description:
        'A premier English-medium institution affiliated to CBSE, New Delhi, delivering strong academic foundations with all-round personality development.',
    },
    {
      icon: 'flaticon-funds',
      title: 'Modern Facilities & Safe Campus',
      description:
        'From labs and library to transport and interactive classes, students learn in a secure and supportive environment.',
    },
    {
      icon: 'flaticon-flexibility',
      title: 'Values, Leadership & Life Skills',
      description:
        'We nurture responsible future citizens through value-based learning, innovation, discipline, and confidence.',
    },
  ];
  return (
    <div className="it-choose-area it-choose-style-2 z-index fix p-relative grey-bg pt-180 pb-110">
      <div className="it-choose-shape-5 d-none d-xl-block">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="it-choose-shape-6 d-none d-xl-block">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="it-choose-shape-7 d-none d-xl-block">
        <img src={shapeImg3} alt="" />
      </div>
      <div className="it-choose-shape-8 d-none d-xl-block">
        <img src={shapeImg4} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="it-choose-thumb-box text-center text-lg-end">
              <div className="it-choose-thumb p-relative">
                <img src={chooseImg} alt="Students at Ever Green Senior Secondary School" />
                <div className="it-choose-shape-1">
                  <img src={shapeImg5} alt="" />
                </div>
                <div className="it-choose-shape-2">
                  <img src={shapeImg6} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="it-choose-left">
              <SectionTitle
                itemClass="it-choose-title-box mb-30"
                subTitleClass="it-section-subtitle-2 white-bg"
                subTitle="WHY CHOOSE US"
                titleClass="ed-section-title"
                title="Best CBSE Senior Secondary School in Halduchaur Haldwani"
              />
              <div className="it-choose-content-box">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="it-choose-content d-flex align-items-center mb-30"
                  >
                    <div className="it-choose-icon">
                      <span>
                        <i className={item.icon}></i>
                      </span>
                    </div>
                    <div className="it-choose-text">
                      <h4 className="it-choose-title">{item.title}</h4>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
