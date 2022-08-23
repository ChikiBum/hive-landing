import React from 'react';
import { RatingWrapper, Reviews, RatingCount, Stars } from './raiting.styled';
import StarIcon from '@mui/icons-material/Star';

const BestSellersRaiting = () => {
  return (
    <RatingWrapper>
      <RatingCount>4,1</RatingCount>
      <Stars
        name="text-feedback"
        value={4}
        readOnly
        precision={0.1}
        size="large"
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
