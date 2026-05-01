import React from 'react';
import HeaderFive from '../../components/Header/HeaderFive';
import CheckoutMain from './CheckoutMain';
import Footer from '../../components/Footer';

const Checkout = () => {
  return (
    <>
      <HeaderFive />

      <CheckoutMain />

      <Footer
        footerClass="it-footer-area it-footer-bg ed-footer-style-2 black-bg pt-120 pb-70"
        copyrightTextClass="it-copyright-text style-3 text-center"
      />
    </>
  );
};

export default Checkout;
