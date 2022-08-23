import React, { useState } from 'react';
import {
  Wrapper,
  StyledTitle,
  SeeMoreButton,
  CardsGridWrapper,
  DescriptionWrapper,
  DescriptionTitle,
  DescriptionImage,
  ContentWrapper,
  TextWrapper,
} from './realBestSellers.styled';
import { uuid } from 'uuidv4';
import CourseCard from './course-card';
import readMan from './../../common/images/realBestSellers/ReadMan.png';
import { getCourses } from '../../../__mocks__';

const RealBestSellers = () => {
  const [coursesCount, setCoursesCount] = useState<number>(10);

  const course = getCourses().data;

  const createCourses = () => course;

  const createUsers = (numUsers = 5) => {
    return new Array(numUsers).fill(null).map(createCourses);
  };

  const coursesFakeData = createUsers(coursesCount);

  const getNewCourseDate = () => setCoursesCount((prev) => prev + 10);

  return (
    <>
      <Wrapper>
        <StyledTitle>Best Sellers over last 24 hours</StyledTitle>
        <CardsGridWrapper>
          {coursesFakeData.map((course, i) => (
            <CourseCard
              index={i}
              key={uuid()}
              image={course.image}
              title={course.title}
              subtitle={course.subtitle}
              name={course.name}
              updatedAt={course.updatedAt}
              videoDuration={course.videoDuration}
              countOfContent={course.countOfContent}
              rating={course.rating}
              reviews={course.reviews}
              price={course.price}
            />
          ))}
        </CardsGridWrapper>
        <SeeMoreButton onClick={getNewCourseDate}>See More</SeeMoreButton>
      </Wrapper>
      <DescriptionWrapper>
        <ContentWrapper>
          <DescriptionTitle>
            Read the world of <span>Web3</span>
          </DescriptionTitle>
          <TextWrapper>
            <span>
              Boost your knowledge skills and dive deep into the unlimited world
              of Web3 with our blog artciles from professional writers.
            </span>
            <span>
              • Search through our extensive library of blog articles and start
              learning today!
            </span>
          </TextWrapper>
        </ContentWrapper>
        <DescriptionImage src={readMan} alt="readMan" />
      </DescriptionWrapper>
    </>
  );
};

export default RealBestSellers;
