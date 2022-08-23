import styled from 'styled-components';

export const SliderWrapper = styled.div`
  position: absolute;
  top: 65%;
  width: 70%;
`;

export const LeftArrow = styled.img`
  position: absolute;
  left: 5%;
  top: 45%;
  z-index: 100;
  border-radius: 100px;
  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5));

  @media (max-width: 1000px) {
    top: 300px;
    left: 0%;
  }
`;

export const RightArrow = styled.img`
  position: absolute;
  top: 45%;
  right: 5%;
  z-index: 100;
  border-radius: 100px;
  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5));

  @media (max-width: 1000px) {
    top: 300px;
    right: 0%;
  }
`;
