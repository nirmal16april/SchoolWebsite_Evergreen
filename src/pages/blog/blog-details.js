import React from 'react';
import HeaderFive from '../../components/Header/HeaderFive';
import BlogDetailsMain from './BlogDetailsMain';
import Footer from '../../components/Footer';

const BlogDetails = () => {
  return (
    <>
      <HeaderFive />

      <BlogDetailsMain />

      <Footer
        footerClass="it-footer-area it-footer-bg ed-footer-style-2 black-bg pt-120 pb-70"
        copyrightTextClass="it-copyright-text style-3 text-center"
      />
    </>
  );
};

export default BlogDetails;
