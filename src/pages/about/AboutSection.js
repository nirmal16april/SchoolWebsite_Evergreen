import React from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../components/SVG';

import aboutImg1 from '../../assets/new-images/about-page/img_01.jpg';
import aboutImg2 from '../../assets/new-images/about-page/img_03.jpg';
import aboutImg3 from '../../assets/new-images/about-page/img_02.jpg';
import shapeImg1 from '../../assets/img/about/ed-shape-2-1.png';
import shapeImg2 from '../../assets/img/about/ed-shape-2-2.png';
import titleImg from '../../assets/img/about/title-home2.png';

const About = () => {
  return (
    <div id="it-about" className="it-about-3-area fix pt-120 pb-120 p-relative">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="ed-about-2-left p-relative text-end">
              <div className="ed-about-2-left-box d-inline-flex align-items-end">
                <div className="ed-about-2-thumb-one pb-110 mr-20">
                  <img src={aboutImg1} alt="Ever Green Senior Secondary School student" />
                </div>
                <div className="ed-about-2-thumb-two text-start">
                  <img className="mb-20 inner-top-img" src={aboutImg2} alt="" />
                  <img src={aboutImg3} alt="" />
                </div>
              </div>
              <div className="ed-about-2-thumb-shape-1 d-none lg-block">
                <img src={shapeImg1} alt="" />
              </div>
              <div className="ed-about-2-thumb-shape-2 d-none d-xxl-block">
                <img src={shapeImg2} alt="" />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-about-3-title-box">
              <span className="it-section-subtitle-3">
                <img src={titleImg} alt=""></img> about us
              </span>
              <h2 className="it-section-title-3 pb-30">
                Welcome to <span>Ever Green Senior Secondary School</span>
              </h2>
              <p>
                Ever Green Senior Secondary School was established on 13th July
                1996 by Mr. L. D. Pathak in Haldwani, Uttarakhand. The school is
                a premier English medium institution affiliated to C.B.S.E., New
                Delhi and owned by Educational Welfare Society, Tularampur.
              </p>
            </div>
            <div className="it-about-3-mv-box">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="it-about-3-mv-item">
                    <span className="it-about-3-mv-title">OUR MISSION:</span>
                    <p>
                      To emerge as a role model in holistic, value-based and
                      exploratory learning, creating self-motivated learners and
                      responsible future citizens.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="it-about-3-mv-item">
                    <span className="it-about-3-mv-title">OUR VISION:</span>
                    <p>
                      To create leaders of tomorrow with intuitive capabilities,
                      integrity, and a lasting appreciation for learning in a
                      secure and creative environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-about-3-btn-box p-relative">
              <Link className="ed-btn-theme theme-2" to="/about-us">
                Admission open
                <i>
                  <RightArrow />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
