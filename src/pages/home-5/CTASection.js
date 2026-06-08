import React from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../components/SVG';

import ctaImg from '../../assets/new-images/Home-page/img-2.jpg';

const CTA = () => {
  return (
    <div className="it-cta-area it-cta-height black-bg p-relative">
      <div className="it-cta-bg d-none d-xl-block">
        <img src={ctaImg} alt="Students at Ever Green Senior Secondary School" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-9 col-xl-8 col-lg-7 col-md-7">
            <div className="it-cta-content">
              <h4 className="it-cta-title">
                Registration open for session 2026-27 at Ever Green Senior Secondary School.
              </h4>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-5">
            <div className="it-cta-button text-md-end">
              <Link className="ed-btn-square orange" to="/contact">
                Enrol your child
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
export default CTA;
