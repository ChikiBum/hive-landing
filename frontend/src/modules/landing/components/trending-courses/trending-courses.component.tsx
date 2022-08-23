import React from 'react';
import * as Styled from './trending-courses.styled';
// import Card from './cart/card.component';
import ButtonsLine from './buttons-line/buttons-line.component';
// import cardImg from '../../../../images/trending-courses/img1.png';
import Slide from './slider/inde';
const TrendingCourses = () => {
  const [category, setCategory] = React.useState<Array<string>>([]);

  return (
    <Styled.Conteiner>
      <Styled.Text>Trending Courses by Category </Styled.Text>
      <Styled.BtnFirstLine>
        <ButtonsLine category={category} setCategory={setCategory} />
      </Styled.BtnFirstLine>

      <Slide />
    </Styled.Conteiner>
  );
};
export default TrendingCourses;
