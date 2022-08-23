import styled from 'styled-components';
import { IToggleText, IAcordeonImg } from '../../types/faq.types';

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${({ theme }) => theme.percents.x_100};
  padding-left: ${({ theme }) => theme.spaces.x_50};
  padding-right: ${({ theme }) => theme.spaces.x_50};
  padding-bottom: ${({ theme }) => theme.spaces.x_133};
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: ${({ theme }) => theme.weight.w_700};
  font-size: ${({ theme }) => theme.fonts.x_28};
  color: ${({ theme }) => theme.colors.primary};
`;
export const ToggleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.x_14};
  width: ${({ theme }) => theme.percents.x_60};

  margin-top: ${({ theme }) => theme.spaces.x_44};
  background: ${({ theme }) => theme.colors.footerText};
  box-shadow: ${({ theme }) => theme.spaces.x_0}
    ${({ theme }) => theme.spaces.x_0} ${({ theme }) => theme.spaces.x_38}
    rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.spaces.x_50};
`;

export const ToggleText = styled.div<IToggleText>`
  font-style: normal;
  font-weight: ${({ theme }) => theme.weight.w_500};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  font-size: ${({ theme }) => theme.fonts.lg};
  color: ${({ theme }) => theme.colors.primary};
  ${({ active }) =>
    active &&
    `  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #ffb03a;
  padding: 15px 46px;
  margin-right: 0px;
  margin-left:0px;`};
`;
export const AcordeonWraper = styled.div<IAcordeonImg>`
  margin-top: ${({ theme }) => theme.spaces.sm};
  width: ${({ theme }) => theme.percents.x_60};
  ${({ active }) => !active && 'display:none;'}
`;
