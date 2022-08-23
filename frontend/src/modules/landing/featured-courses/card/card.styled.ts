import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  padding: 0;
  box-shadow: 0px 0px ${({ theme }) => theme.spaces.xxxl} rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border-radius: 25px;
  margin-right: 40px;
  background: ${({ theme }) => theme.colors.white};

  .css-1fzpoyk! > div {
    top: 10% !important;
  }
`;

export const CardImg = styled.img`
  display: block;
  width: ${({ theme }) => theme.percents.x_100};
  width: 100%;
  height: 282px;
`;

export const Token = styled.img``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 2% 4% 5% 4%;
  overflow: hidden;
`;

export const CardTitle = styled.h4`
  display: block;
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.md};
  line-height: ${({ theme }) => theme.percents.x_124};
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spaces.xxs};
`;

export const AuthorLink = styled.a`
  display: block;
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.xxs};
  line-height: ${({ theme }) => theme.percents.x_124};
  color: ${({ theme }) => theme.colors.greyText};
  margin-bottom: ${({ theme }) => theme.spaces.xxs};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Price = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fonts.md};
  padding: ${({ theme }) => theme.spaces.sm};
`;

export const SeeMoreButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
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
