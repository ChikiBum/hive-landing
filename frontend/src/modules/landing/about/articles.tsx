import React from 'react';
import { getArticles } from '../../../__mocks__';
import Acticle, { IArticleProps } from '../../common/components/acticle';
import { ArticleWrapper } from './about.styled';

const Articles = () => {
  const articles = getArticles().data;

  console.log(articles);

  const renderArticles = () => {
    if (!articles.length) return null;

    return articles.map((item: IArticleProps) => {
      return (
        <>
          <Acticle {...item} />
        </>
      );
    });
  };

  return <ArticleWrapper>{renderArticles()}</ArticleWrapper>;
};

export default Articles;
