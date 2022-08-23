import React from 'react';
import { Carousel } from '3d-react-carousal';
import Card from '../card';
import './slider.css';

const slides = [
  <div key="random1">
    <Card />
  </div>,
  <div key="random2">
    <Card />
  </div>,
  <div key="random3">
    <Card />
  </div>,
  <div key="random4">
    <Card />
  </div>,
  <div key="rando5">
    <Card />
  </div>,
];

export const ExampleSlider = () => {
  return (
    <div style={{ margin: '20px', width: '100%' }}>
      <Carousel slides={slides} autoplay={false} interval={1000} />
    </div>
  );
};
