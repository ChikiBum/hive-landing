import React from 'react';
import { Wrapper, StyledTitle, SeeMoreButton } from './featuredCourses.styled';
// import Card from './card';
// import Slider from './slider';
import { ExampleSlider } from './springSlider';

const FeaturedCourses = () => {
  return (
    <Wrapper>
      <StyledTitle>Title</StyledTitle>
      {/* <Card /> */}
      {/* <Slider /> */}
      <ExampleSlider />
      <SeeMoreButton>See More</SeeMoreButton>
    </Wrapper>
  );
};

export default FeaturedCourses;
