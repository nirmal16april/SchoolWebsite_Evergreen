import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import RightArrow from '../../components/SVG';

import shapeImg1 from '../../assets/img/about/ed-shape-2.png';
import shapeImg2 from '../../assets/img/about/ed-shape-1.png';
import aboutImg1 from '../../assets/img/custom/home-5/3.svg';
import aboutImg2 from '../../assets/img/about/ed-5-2.jpg';

const About = () => {
  return (
    <div id="it-about" className="it-about-5-area p-relative fix pt-60 pb-120">
      <div className="ed-about-5-shape-2">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-5-right">
              <SectionTitle
                itemClass="it-about-5-title-box pb-10 section-title-fixed-width-2"
                subTitleClass="ed-section-subtitle"
                subTitle="About Us"
                titleClass="it-section-title-5"
                title="Welcome to Ever Green Senior Secondary School"
              />
              <div className="it-about-5-text mb-30">
                <p>
                  Ever Green Senior Secondary School, established on 13 July 1996
                  by Mr. L. D. Pathak, is a premier English-medium institution
                  affiliated to CBSE, New Delhi, and managed by Educational Welfare
                  Society, Tularampur. Located at Sri Ganga Vihar Colony, Beri
                  Parao, Nainital (Uttarakhand), the school is known as one of the
                  best CBSE Senior Secondary schools in Halduchaur Haldwani.
                </p>
              </div>
              <div className="ed-about-5-content">
                <div className="it-about-5-list mb-10">
                  <ul>
                    <li>
                      <i className="fa-regular fa-check"></i>First English-medium
                      school in this remote rural area
                    </li>
                    <li>
                      <i className="fa-regular fa-check"></i>Motto: "Vidyaiv Balam"
                      - intellectual exploration and creativity
                    </li>
                  </ul>
                </div>
                <div className="it-about-5-list mb-40">
                  <ul>
                    <li>
                      <i className="fa-regular fa-check"></i>Mission: holistic,
                      value-based and exploratory learning
                    </li>
                    <li>
                      <i className="fa-regular fa-check"></i>Vision: nurturing
                      leaders of tomorrow with integrity and responsibility
                    </li>
                  </ul>
                </div>
                <div className="it-about-5-list mb-40">
                  <ul>
                    <li>
                      <i className="fa-regular fa-check"></i>Established in 1996
                      with a commitment to academic excellence
                    </li>
                    <li>
                      <i className="fa-regular fa-check"></i>Focus on scholastic
                      growth with all-round personality development
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-feature-button">
                <Link
                  className="ed-btn-square orange"
                  to="/about-us"
                >
                  Read full history
                  <i>
                    <RightArrow />
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="ed-about-5-right d-flex justify-content-between p-relative">
              <div className="ed-about-5-thumb-2">
                <img src={aboutImg1} alt="" />
              </div>
              <div className="ed-about-5-thumb-1">
                <img src={aboutImg2} alt="" />
              </div>
              <div className="ed-about-5-shape-1">
                <img src={shapeImg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
