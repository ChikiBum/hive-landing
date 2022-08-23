import React from 'react';
import { Styled } from './button.styled';

export interface IButtonProps {
  width?: string;
  height?: string;
  text: string;
  fontSize?: number;
  fontWeight?: number;
  borderRadius?: number;
  background?: string;
  color?: string;
  type?: 'button' | 'submit' | 'reset';
  marginTop?: string;
  fontFamily?: string;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  width,
  height,
  text,
  fontSize,
  fontWeight,
  borderRadius,
  background,
  color,
  type = 'button',
  onClick,
  marginTop,
}) => {
  return (
    <Styled.Button
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      background={background}
      color={color}
      onClick={onClick}
      type={type}
      marginTop={marginTop}
    >
      {text}
    </Styled.Button>
  );
};
