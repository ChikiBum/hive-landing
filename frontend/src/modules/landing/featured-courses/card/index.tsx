import React from 'react';
import {
  Wrapper,
  CardImg,
  ContentWrapper,
  PriceWrapper,
  Price,
  CardTitle,
  AuthorLink,
  Token,
} from './card.styled';
import firstImage from '../../../common/images/bestSellers/bestSellersFirst.png';
import usdCoinUsdc from '../../../common/images/bestSellers/usdCoinUsdc.png';
import BestSellersRaiting from './raiting';

interface ICardProps {
  title: string;
}

const Card = ({ title }: ICardProps) => {
  return (
    <Wrapper>
      <CardImg src={firstImage} alt="" />
      <ContentWrapper>
        <CardTitle>
          {title} Introduction to Blockchain: Beginner to Advanced
        </CardTitle>

        <AuthorLink href="">Sunny Gill</AuthorLink>
        <BestSellersRaiting />
        <PriceWrapper>
          <Token src={usdCoinUsdc} />
          <Price>1,399 USDC</Price>
        </PriceWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Card;
