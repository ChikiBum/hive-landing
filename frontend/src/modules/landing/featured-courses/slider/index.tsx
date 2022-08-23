import React, { useState } from 'react';
import Slider from 'react-spring-3d-carousel';
import Card from '../card';
import { LeftArrow, RightArrow, SliderWrapper } from './slider.styled';
import { config } from 'react-spring';
import LeftArrowImage from '../../../../assets/image/LeftArrow.png';
import RightArrowImage from '../../../../assets/image/RightArrow.png';

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const rightArrowHandler = () => {
    setSlideIndex(slideIndex + 1);
  };

  const leftArrowHandler = () => {
    setSlideIndex(slideIndex - 1);
  };

  const slides = [
    {
      id: 1,
      content: <Card title={'1'} />,
    },
    {
      id: 2,
      content: <Card title={'2'} />,
    },
    {
      id: 3,
      content: <Card title={'3'} />,
    },
    {
      id: 4,
      content: <Card title={'4'} />,
    },
    {
      id: 5,
      content: <Card title={'5'} />,
    },
    {
      id: 17,
      content: <Card title={'6'} />,
    },
    {
      id: 7,
      content: <Card title={'7'} />,
    },
    {
      id: 8,
      content: <Card title={'8'} />,
    },
    {
      id: 9,
      content: <Card title={'9'} />,
    },
    {
      id: 10,
      content: <Card title={'10'} />,
    },
    {
      id: 12,
      content: <Card title={'11'} />,
    },
    {
      id: 13,
      content: <Card title={'12'} />,
    },
    {
      id: 14,
      content: <Card title={'13'} />,
    },
    {
      id: 15,
      content: <Card title={'14'} />,
    },
    {
      id: 16,
      content: <Card title={'15'} />,
    },
  ];

  return (
    <SliderWrapper>
      <Slider
        offsetRadius={4}
        animationConfig={config.gentle}
        goToSlide={slideIndex}
        slides={slides}
        showNavigation={false}
      />
      <RightArrow onClick={rightArrowHandler} src={RightArrowImage} />
      <LeftArrow onClick={leftArrowHandler} src={LeftArrowImage} />
    </SliderWrapper>
  );
};
