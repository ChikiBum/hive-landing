import React from 'react';
import { Title as TitleComponent } from './title.styled';

interface ITitleProps {
  title: string;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  maxWidth?: string;
  marginTop?: string;
}

const Title = ({
  title,
  color,
  fontWeight,
  fontSize,
  maxWidth,
  marginTop,
}: ITitleProps) => {
  return (
    <TitleComponent
      maxWidth={maxWidth}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginTop={marginTop}
    >
      {title}
    </TitleComponent>
  );
};

export default Title;
