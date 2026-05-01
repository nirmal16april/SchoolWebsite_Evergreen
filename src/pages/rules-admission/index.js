import React from 'react';
import Footer from '../../components/Footer';
import HeaderFive from '../../components/Header/HeaderFive';
import AdmissionMain from './AdmissionMain';

const RulesAdmission = () => {
  return (
    <>
      <HeaderFive />
      <AdmissionMain />
      <Footer
        footerClass="it-footer-area it-footer-bg ed-footer-style-2 black-bg pt-120 pb-70"
        copyrightTextClass="it-copyright-text style-3 text-center"
      />
    </>
  );
};

export default RulesAdmission;
