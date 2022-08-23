import styled from 'styled-components';

export const Wrapper = styled.div<{
  maxWidth?: string;
  marginTop?: string;
  minWidth?: string;
  backgroundImage?: string;
  contentType?: string;
}>`
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ contentType }) =>
    contentType ? '44px 75px 58px 127px' : '55px 74px 46px 55px'};
  border-radius: 50px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  background: ${({ theme }) => theme.colors.modalBg};
`;

export const ModalButton = styled.div`
  padding: 31px 42px 31px 42px;
  border-radius: 50px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  background: ${({ theme }) => theme.colors.white};
  height: 107px;
  margin-top: 52px;
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const Text = styled.p<{
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  marginTop?: string;
}>`
  display: ${({ color }) => !!color && 'inline'};
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-size: ${({ theme, fontSize }) => (fontSize ? fontSize : theme.fonts.lg)};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? fontWeight : theme.fontWeights.medium};
  background-image: ${({ color, theme }) =>
    color ? color : theme.colors.black};
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ color }) =>
    !!color && color !== 'black' && 'transparent'};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0px')};
`;

export const Space = styled.div`
  height: 15px;
`;
