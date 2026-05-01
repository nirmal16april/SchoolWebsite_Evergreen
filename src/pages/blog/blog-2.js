import React from 'react';
import HeaderFive from '../../components/Header/HeaderFive';
import BlogTwoMain from './BlogTwoMain';
import Footer from '../../components/Footer';

const BlogTwo = () => {
  return (
    <>
      <HeaderFive />

      <BlogTwoMain />

      <Footer
        footerClass="it-footer-area it-footer-bg ed-footer-style-2 black-bg pt-120 pb-70"
        copyrightTextClass="it-copyright-text style-3 text-center"
      />
    </>
  );
};

export default BlogTwo;
