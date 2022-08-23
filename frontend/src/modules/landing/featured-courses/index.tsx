import React from 'react';
import { Wrapper, StyledTitle, SeeMoreButton } from './featured-courses.styled';
import { Carousel } from './slider';

const FeaturedCourses = () => {
  return (
    <Wrapper>
      <StyledTitle>Featured Courses</StyledTitle>
      <Carousel />
      <SeeMoreButton>See More</SeeMoreButton>
    </Wrapper>
  );
};

export default FeaturedCourses;
