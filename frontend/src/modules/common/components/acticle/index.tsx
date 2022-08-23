import React from 'react';
import { theme } from '../../../../theme';
import Title from '../title';
import { ActicleItem, Arrow, SeeMoreWrapper } from './acticle.styled';
import ArrowImg from '../../../../assets/image/ArrowRight.png';

export interface IArticleProps {
  title: string;
  descrition: string;
  id: number;
}

const Acticle = ({ title, descrition }: IArticleProps) => {
  return (
    <ActicleItem>
      <Title
        maxWidth="440px"
        fontWeight={theme.fontWeights.semiBold}
        fontSize={theme.fonts.xl}
        title={title}
      />
      <Title
        maxWidth="440px"
        fontWeight={theme.fontWeights.regular}
        fontSize={theme.fonts.md}
        title={descrition}
        marginTop="12px"
      />
      <SeeMoreWrapper>
        <Title
          fontWeight={theme.fontWeights.medium}
          fontSize={theme.fonts.xs}
          title="See More"
        />
        <Arrow src={ArrowImg} />
      </SeeMoreWrapper>
    </ActicleItem>
  );
};

export default Acticle;
