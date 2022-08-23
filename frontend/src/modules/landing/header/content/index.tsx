import React from 'react';
import {
  Wrapper,
  TitleWrapper,
  ImageWrapper,
  ImageHouse,
  Title,
  TitleDescription,
  ExploreButton,
  BecomeButton,
  ButtonsWrapper,
} from './content.styled';
import houseImage from '../../../common/images/header/headerImage.png';

const HeaderBody = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Our Academy is the largest Web3 online course marketplace</Title>
        <TitleDescription>
          Browse through thousands of courses about blockchain, crypto, DeFi,
          NFTs and much more
        </TitleDescription>
        <ButtonsWrapper>
          <ExploreButton>Explore Courses</ExploreButton>
          <BecomeButton>Become an Instructor</BecomeButton>
        </ButtonsWrapper>
      </TitleWrapper>
      <ImageWrapper>
        <ImageHouse src={houseImage} alt="houseImage" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default HeaderBody;
