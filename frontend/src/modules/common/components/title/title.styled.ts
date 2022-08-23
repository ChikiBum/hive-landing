import styled from 'styled-components';

export const Title = styled.div<{
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  maxWidth?: string;
  marginTop?: string;
}>`
  margin-top: ${({ marginTop }) => marginTop};
  max-width: ${({ maxWidth }) => maxWidth};
  color: ${({ theme, color }) => color || theme.colors.black};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fonts.x_28};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight || theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
`;
