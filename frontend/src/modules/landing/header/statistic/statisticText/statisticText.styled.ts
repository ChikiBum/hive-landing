import styled from 'styled-components';

export const TopText = styled.span`
  margin-top: 44px;
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.xxxxxl};
  line-height: ${({ theme }) => theme.percents.x_124};
  color: ${({ theme }) => theme.colors.white};
`;

export const BottomText = styled.span`
  margin-top: 28px;
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_500};
  font-size: ${({ theme }) => theme.fonts.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.white}; ;
`;
