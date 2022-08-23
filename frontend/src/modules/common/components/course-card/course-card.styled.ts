import styled from 'styled-components';
import { Rating } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  margin-top: 98px;
  @media (max-width: 1247px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Banner = styled.img`
  object-fit: contain;
  border-radius: 25px;
  filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.15));
  height: 346px;
  max-width: 636px;
`;

export const InfoWrapper = styled.div`
  padding: 50px 60px 26px 70px;
  text-align: start;
`;

export const SubInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 19px;
`;

export const SubInfoItem = styled.div<{ fontWeight?: string }>`
  display: ${({ fontWeight }) => !!fontWeight && 'inline'};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fonts.xxs};
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  &:last-child > p {
    display: none;
  }
`;

export const Dought = styled.p`
  display: inline-block;
  width: 50px;
  text-align: center;
`;

export const RaitingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 21px;
`;

export const RaitingNumber = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fonts.xs};
  color: ${({ theme }) => theme.colors.orangeRating};
  margin-right: 20px;
`;

export const Ratings = styled(Rating)`
  color: ${({ theme }) => theme.colors.yellowStar} !important;
  margin-right: 16px;
`;

export const MainPriceWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 14px;
`;

export const PriceSymb = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 17px;
  object-fit: contain;
`;

export const Price = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fonts.md};
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
`;
