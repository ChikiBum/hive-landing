import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import {
  Banner,
  Dought,
  InfoWrapper,
  RaitingNumber,
  RaitingWrapper,
  SubInfoItem,
  SubInfoWrapper,
  Wrapper,
  Ratings,
  MainPriceWrapper,
  PriceWrapper,
  PriceSymb,
  Price,
} from './course-card.styled';
import Title from '../title';
import { theme } from '../../../../theme';
import { Button } from '../button';
import Coin from '../../../../assets/image/UsdcCoin.png';
import { getCourses } from '../../../../__mocks__';

const CourseCard = () => {
  const starsStyle = { opacity: 0.55 };

  const course = getCourses().data;

  return (
    <Wrapper>
      <Banner src={course.image} />
      <InfoWrapper>
        <Title
          fontSize={theme.fonts.xxl}
          fontWeight={theme.fontWeights.semiBold}
          title={course.title}
        ></Title>
        <Title
          fontWeight={theme.fontWeights.regular}
          fontSize={theme.fonts.xs}
          title={course.subtitle}
        />
        <Title
          fontWeight={theme.fontWeights.semiBold}
          fontSize={theme.fonts.xxs}
          title={`by ${course.name}`}
          color={theme.colors.courseAuthor}
        />
        <SubInfoWrapper>
          <SubInfoItem>
            Updated{' '}
            <SubInfoItem fontWeight={theme.fontWeights.semiBold}>
              {course.updatedAt}
            </SubInfoItem>
            <Dought>•</Dought>
          </SubInfoItem>
          <SubInfoItem>
            {course.videoDuration} total hours
            <Dought>•</Dought>
          </SubInfoItem>
          <SubInfoItem>
            {course.countOfContent} lectures
            <Dought>•</Dought>
          </SubInfoItem>
        </SubInfoWrapper>
        <RaitingWrapper>
          <RaitingNumber>{course.rating}</RaitingNumber>
          <Ratings
            name="read-only"
            value={course.rating}
            precision={0.1}
            readOnly
            emptyIcon={<StarIcon style={starsStyle} />}
          />
          <Title
            title={`(${course.reviews} reviews)`}
            fontSize={theme.fonts.xxs}
            fontWeight={theme.fontWeights.medium}
            color={theme.colors.greyText}
          />
        </RaitingWrapper>
        <MainPriceWrapper>
          <PriceWrapper>
            <PriceSymb src={Coin} />
            <Price>{course.price ? course.price : 'FREE'}</Price>
          </PriceWrapper>
          <Button
            color={theme.colors.white}
            background={theme.colors.buttonModal}
            text="Enroll Now"
            borderRadius={25}
            height="55px"
            width="262px"
          />
        </MainPriceWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default CourseCard;
