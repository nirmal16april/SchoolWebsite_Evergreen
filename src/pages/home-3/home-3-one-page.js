import React from 'react';
import HeaderThree from '../../components/Header/HeaderThree';
import Footer from '../../components/Footer';
import HomeThreeMain from './HomeThreeMain';

const HomeThreeOnePage = () => {
  return (
    <>
      <HeaderThree onePage={true} parentMenu="home" />

      <HomeThreeMain />

      <Footer
        footerClass="it-footer-area it-footer-bg ed-footer-style-2 black-bg pt-120 pb-70"
        copyrightTextClass="it-copyright-text style-3 text-center"
      />
    </>
  );
};
export default HomeThreeOnePage;
