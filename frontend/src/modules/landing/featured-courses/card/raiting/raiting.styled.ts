import { Rating } from '@mui/material';
import styled from 'styled-components';

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  margin-top: 15px;
  margin-bottom: ${({ theme }) => theme.spaces.xxs};
`;

export const Reviews = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.w_500};
  font-size: ${({ theme }) => theme.fonts.xxs};
  line-height: ${({ theme }) => theme.percents.x_124};
  color: rgba(43, 43, 43, 0.5);
`;

export const RatingCount = styled.div`
  color: ${({ theme }) => theme.colors.orangeRating};
  font-size: ${({ theme }) => theme.fonts.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-right: 10px;
`;

export const Stars = styled(Rating)`
  color: ${({ theme }) => theme.colors.yellowStar} !important;
  margin-right: 10px;
`;
