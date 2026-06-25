import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import About from './AboutSection';
import FunFact from './FunFactSection';
// import Team from './TeamSection';
import Testimonial from './TestimonialSection';

const AboutMain = () => {
  return (
    <main>
      <Breadcrumb title="Mission & Vision" subTitle="About Us" />
      <About />
      <FunFact />
      <Testimonial />
      {/* <Course /> */}
      {/* Instructor slider — hidden until portraits/content are ready */}
      {/* <Team /> */}
    </main>
  );
};
export default AboutMain;
