import React, { FC } from 'react';
import { TopText, BottomText } from './statisticText.styled';

interface Props {
  count?: string;
  text?: string;
}

const BottomRowText: FC<Props> = ({ count, text }) => {
  return (
    <>
      <TopText>{count}</TopText>
      <BottomText>{text}</BottomText>
    </>
  );
};

export default BottomRowText;
