import React from 'react';
import About from './AboutSection';
import CTA from './CTASection';
import FAQ from './FaqSection';
import Feature from './FeatureSection';
import Banner from './HomeFiveBanner';
import Testimonial from './TestimonialSection';
import Video from './VideoSection';
import WhyChooseUs from './WhyChooseUsSection';
import Work from './WorkSection';
import HighlightsSection from './components/HighlightsSection';

const HomeFiveMain = () => {
  return (
    <main>
      <Banner />
      <Feature />
      <HighlightsSection />
      <About />
      <CTA />
      {/* <Course /> */}
      <WhyChooseUs />
      <Testimonial />
      <Video />
      <FAQ />
      <Work />
      {/* <Blog /> */}
    </main>
  );
};
export default HomeFiveMain;
