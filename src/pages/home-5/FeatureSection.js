import React from 'react';
import SingleFeatureTwo from '../../components/Feature/SingleFeatureTwo';

import iconImg1 from '../../assets/img/feature/1.svg';
import iconImg2 from '../../assets/img/feature/2.svg';
import iconImg3 from '../../assets/img/feature/3.svg';

const Feature = () => {
  return (
    <div id="it-feature" className="it-feature-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <SingleFeatureTwo
              iconImage={iconImg1}
              title="360° Holistic Education"
              description="We nurture every learner through academics, life skills, values, and co-curricular growth to build confident and capable individuals."
            />
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <SingleFeatureTwo
              iconImage={iconImg2}
              title="Secured Environment"
              description="Our campus provides a safe, disciplined, and caring atmosphere where students can learn with confidence and parents can feel assured."
            />
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <SingleFeatureTwo
              iconImage={iconImg3}
              title="Traditional Gurukul Approach"
              description="We blend timeless Gurukul values with modern teaching practices to develop character, respect, and strong academic foundations."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
