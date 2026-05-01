import React from 'react';
import HeaderFive from '../../components/Header/HeaderFive';
import Footer from '../../components/Footer';
import BlogSidebarMain from './BlogSidebarMain';

const BlogSidebar = () => {
  return (
    <>
      <HeaderFive />

      <BlogSidebarMain />

      <Footer
        footerClass="it-footer-area it-footer-bg ed-footer-style-2 black-bg pt-120 pb-70"
        copyrightTextClass="it-copyright-text style-3 text-center"
      />
    </>
  );
};

export default BlogSidebar;
