import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.percents.x_7};
`;

export const TitleWrapper = styled.div`
  width: ${({ theme }) => theme.percents.x_54};
  height: ${({ theme }) => theme.percents.x_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  width: ${({ theme }) => theme.percents.x_72};
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.xxxxxxl};
  line-height: ${({ theme }) => theme.percents.x_124};
  letter-spacing: 0.002em
  color: ${({ theme }) => theme.colors.primary};
`;

export const TitleDescription = styled.span`
  width: ${({ theme }) => theme.percents.x_72};
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_400};
  font-size: ${({ theme }) => theme.fonts.xxl};
  letter-spacing: 0.002em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ImageWrapper = styled.div`
  width: ${({ theme }) => theme.percents.x_44};
  height: ${({ theme }) => theme.percents.x_150};
  background: url(images/header/underHouse.png);
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
`;

export const ImageHouse = styled.img`
  object-fit: fill;
  object-position: left bottom;
  position: absolute;
  bottom: -${({ theme }) => theme.percents.x_7};
  right: ${({ theme }) => theme.percents.x_10};
`;

export const ButtonsWrapper = styled.div`
  width: ${({ theme }) => theme.percents.x_100};
  height: ${({ theme }) => theme.percents.x_100};
  padding-left: ${({ theme }) => theme.percents.x_13};
  padding-top: ${({ theme }) => theme.percents.x_4};
`;

export const ExploreButton = styled.button`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.md};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.mainYellowGradientStart};
  border: 2px solid ${({ theme }) => theme.colors.mainYellowGradientStart};
  border-radius: 50px;
  padding: 1.5% 3%;
`;

export const BecomeButton = styled.button`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.md};
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  padding: 1.5% 3%;
  margin-left: ${({ theme }) => theme.percents.x_3}; ;
`;
