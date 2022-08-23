import React from 'react';
import * as Styled from './card.styled';

import Rating from '@mui/material/Rating';

interface ICartPrors {
  img: any;
  name: string;
  author: string;
  reiting: number;
  reviews: number;
  price: string;
}

const Card: React.FC<ICartPrors> = ({
  img,
  name,
  author,
  reiting,
  reviews,
  price,
}) => {
  return (
    <Styled.Conteiner>
      <Styled.Img src={img} />
      <Styled.Info>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Author>{author}</Styled.Author>
        <Styled.RatingConteiner>
          <Styled.RatingValue>{reiting}</Styled.RatingValue>
          <Rating name="read-only" value={reiting} size="large" readOnly />
          <Styled.RatingVoises>`(${reviews} reviews)`</Styled.RatingVoises>
        </Styled.RatingConteiner>
        <Styled.Price>{price}</Styled.Price>
      </Styled.Info>
    </Styled.Conteiner>
  );
};
export default Card;
