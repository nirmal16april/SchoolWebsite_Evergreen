import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import AboutFacilitiesSection from '../about/AboutFacilitiesSection';

const FacilitiesMain = () => {
  return (
    <main>
      <Breadcrumb title="School Facility" subTitle="About" />
      <AboutFacilitiesSection />
    </main>
  );
};

export default FacilitiesMain;
