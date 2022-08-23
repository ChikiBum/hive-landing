import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 51vh;
  max-width: 19.5vw;
  padding: 0;
  box-shadow: 0px 0px ${({ theme }) => theme.spaces.xxxl} rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spaces.x_50};
`;

export const CardImg = styled.img`
  display: block;
  width: ${({ theme }) => theme.percents.x_100};
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 2% 4% 5% 4%;
  overflow: hidden;
`;

export const CardTitle = styled.h4`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.md};
  line-height: ${({ theme }) => theme.percents.x_124};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spaces.xxs};
`;

export const AuthorLink = styled.a`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.xxs};
  line-height: ${({ theme }) => theme.percents.x_124};
  color: rgba(43, 43, 43, 0.5);
  margin-bottom: ${({ theme }) => theme.spaces.xxs};
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const Price = styled.span`
  padding: ${({ theme }) => theme.spaces.sm};
`;

export const SeeMoreButton = styled.button`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.xl};
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spaces.x_50};
  padding: ${({ theme }) => theme.fonts.xxxxs}
    ${({ theme }) => theme.spaces.x_66};
  box-shadow: 0px 0px ${({ theme }) => theme.spaces.xxxl} rgba(0, 0, 0, 0.15);
`;
