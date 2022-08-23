import styled from 'styled-components';
import { IButtonProps } from './index';

const Button = styled.button<Omit<IButtonProps, 'text'>>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : 'unset'};
  background: ${({ theme, background }) =>
    background || theme.colors.primary_grey};
  border: none;

  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Roboto')};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? `${fontSize}px` : theme.fonts.sm};
  color: ${({ theme, color }) => color || theme.colors.primary_black};
  margin-top: ${({ marginTop }) => marginTop};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Styled = {
  Button,
};
