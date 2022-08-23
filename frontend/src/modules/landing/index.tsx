import React from 'react';
import About from './about/about';
import Faq from './components/frequently-asked-question/frequently-asked-question.component';
import Header from './header';
import TrendingCourses from './components/trending-courses/trending-courses.component';
import RealBestSellers from './realBestSellers';
import FeaturedCourses from './featuredCourses';

const LandingPage = () => {
  return (
    <>
      <Header />
      <FeaturedCourses />
      <TrendingCourses />
      <About />
      <RealBestSellers />
      <Faq />
    </>
  );
};

export default LandingPage;
