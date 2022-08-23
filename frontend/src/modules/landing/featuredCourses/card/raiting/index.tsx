import React from 'react';
import { RatingWrapper, Reviews } from './raiting.styled';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const BestSellersRaiting = () => {
  return (
    <RatingWrapper>
      <span>4,1</span>
      <Rating
        name="text-feedback"
        value={4}
        readOnly
        precision={0.5}
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.55 }}
            fontSize="inherit"
            font-size="1.8em"
          />
        }
      />
      <Reviews>(761 reviews)</Reviews>
    </RatingWrapper>
  );
};

export default BestSellersRaiting;
