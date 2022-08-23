import React from 'react';
import img from '../../../images/trending-courses/img1.png';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getTrendings } from '../../../../../__mocks__';
import './styles.css';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';

import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';
import Card from '../cart/card.component';
import { ICart } from '../../../types/trending-courses.types';

const Slide = () => {
  const data = getTrendings().data;

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={1}
        navigation
        loop
      >
        {data.map((cors: ICart) => {
          return (
            <SwiperSlide key={cors.id}>
              <Card
                key={cors.id}
                img={img}
                name={cors.name}
                author={cors.author}
                reiting={cors.reiting}
                reviews={cors.reviews}
                price={cors.price}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Slide;
