import React from 'react';
import {
  Wrapper,
  CardImg,
  ContentWrapper,
  PriceWrapper,
  Price,
  CardTitle,
  AuthorLink,
} from './card.styled';
import firstImage from '../../../common/images/bestSellers/bestSellersFirst.png';
import usdCoinUsdc from '../../../common/images/bestSellers/usdCoinUsdc.png';
import BestSellersRaiting from './raiting';

const Card = () => {
  return (
    <Wrapper>
      <CardImg src={firstImage} alt="" />
      <ContentWrapper>
        <CardTitle>Introduction to Blockchain: Beginner to Advanced</CardTitle>

        <AuthorLink href="">Sunny Gill</AuthorLink>
        <BestSellersRaiting />
        <PriceWrapper>
          <img src={usdCoinUsdc} alt="" srcSet="" />
          <Price>1,399 USDC</Price>
        </PriceWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Card;
