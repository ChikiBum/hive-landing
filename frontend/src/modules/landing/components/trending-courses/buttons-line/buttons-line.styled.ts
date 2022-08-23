import styled from 'styled-components';
import { IBtnProps } from './buttons-line.types';

export const Btn = styled.div<IBtnProps>`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.spaces.x_0}
    ${({ theme }) => theme.spaces.x_0} ${({ theme }) => theme.spaces.lg}
    rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.spaces.x_50};
  padding: ${({ theme }) => theme.spaces.x_22}
    ${({ theme }) => theme.spaces.x_62};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weight.x_500};
  font-size: ${({ theme }) => theme.fonts.x_1625};
  color: ${({ theme }) => theme.colors.black};
  ${({ active }) => active && 'background: #2b2b2b; color: #ffffff;'};
  ${({ marginRigth }) => marginRigth && `margin-right:${marginRigth}`};
  ${({ marginLeft }) => marginLeft && `margin-left:${marginLeft}`};
  ${({ marginTop }) => marginTop && `margin-top:${marginTop}`};
`;
