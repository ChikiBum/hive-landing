import styled from 'styled-components';
import { Rating } from '@mui/material';

export const Wrapper = styled.div`
  position: relative;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24vh;
  box-shadow: 0px 0px ${({ theme }) => theme.spaces.xxxl} rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spaces.x_50};
`;

export const Banner = styled.img`
  display: block;
  width: ${({ theme }) => theme.percents.x_37};
  height: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3em 2.7vw 3em 2.7vw;
`;

export const SubInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  &:first-child > div {
    padding: ${({ theme }) => theme.spaces.md};
  }
`;

export const Updated = styled.div`
  margin-right: ${({ theme }) => theme.spaces.md};
`;

export const SubInfoItem = styled.div<{ fontWeight?: string }>`
  display: flex;
  align-items: center;
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.fontWeight.w_400}};
  font-size: ${({ theme }) => theme.fonts.xxs};
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  &:last-child > p {
    display: none;
  }
`;

export const Dought = styled.p`
  display: inline-block;
  width: ${({ theme }) => theme.spaces.md};
  text-align: center;
`;

export const RaitingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spaces.xs};
`;

export const RaitingNumber = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.w_600}};
  font-size: ${({ theme }) => theme.fonts.xs};
  color: ${({ theme }) => theme.colors.orangeRating};
  margin-right: ${({ theme }) => theme.spaces.md};
`;

export const Ratings = styled(Rating)`
  color: ${({ theme }) => theme.colors.yellowStar} !important;
  margin-right: ${({ theme }) => theme.spaces.x_16};
`;

export const MainPriceWrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.percents.x_100};
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spaces.xs};
`;

export const PriceSymb = styled.img`
  width: ${({ theme }) => theme.spaces.xl};
  height: ${({ theme }) => theme.spaces.xl};
  margin-right: ${({ theme }) => theme.spaces.x_16};
  object-fit: contain;
`;

export const Price = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.md};
  text-transform: uppercase;
`;

export const PriceWrapper = styled.div`
  display: flex;
`;
