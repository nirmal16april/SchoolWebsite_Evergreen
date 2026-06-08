import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import SingleFeature from '../../components/Feature';
const ServiceTwoMain = () => {
  return (
    <main>
      <Breadcrumb title="Services Style 2" subTitle="Services" />

      <div className="it-feature-3-area it-feature-3-bg inner-style pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <SingleFeature icon="flaticon-coach" title="Best Coaching" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <SingleFeature
                icon="flaticon-study"
                title="Convenient Practice"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <SingleFeature icon="flaticon-booking" title="Best Coaching" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <SingleFeature icon="flaticon-video" title="Creative minds" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <SingleFeature icon="flaticon-booking" title="Video tutorials" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <SingleFeature icon="flaticon-video" title="worlds record" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ServiceTwoMain;
