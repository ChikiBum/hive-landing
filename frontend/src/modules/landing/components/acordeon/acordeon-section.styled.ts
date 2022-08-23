import styled from 'styled-components';
import { IAcordeonImg } from '../../types/faq.types';

export const AcordeonConteiner = styled.div`
  margin-top: ${({ theme }) => theme.spaces.x_53};
  background: ${({ theme }) => theme.colors.footerText};
  box-shadow: ${({ theme }) => theme.spaces.x_0}
    ${({ theme }) => theme.spaces.x_0} ${({ theme }) => theme.spaces.x_50}
    rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.spaces.lg};
`;
export const AcordeonElemeynt = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.lg} ${({ theme }) => theme.spaces.x_36};
`;
export const AcordeonName = styled.p`
  font-style: normal;
  font-weight: ${({ theme }) => theme.weight.w_600};
  font-size: ${({ theme }) => theme.fonts.lg};
  color: ${({ theme }) => theme.colors.primary};
`;
export const AcordeonImg = styled.img<IAcordeonImg>`
  width: ${({ theme }) => theme.spaces.md};
  height: ${({ theme }) => theme.spaces.xxl};
  ${({ active }) => active && 'transform: rotate(90deg);'};
`;

export const AcordeonText = styled.div<IAcordeonImg>`
  font-style: normal;
  font-weight: ${({ theme }) => theme.weight.w_400};
  font-size: ${({ theme }) => theme.spaces.x_24};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spaces.x_26}
    ${({ theme }) => theme.spaces.x_97} ${({ theme }) => theme.spaces.x_8}
    ${({ theme }) => theme.spaces.x_36};
  border-top: ${({ theme }) => theme.spaces.xxxs} solid rgba(196, 196, 196, 0.5);
  ${({ active }) => !active && 'display:none;'};
`;
