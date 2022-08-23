import styled from 'styled-components';
import usdc from '../../../images/trending-courses/usdc.png';

export const Conteiner = styled.div`
  width: 335px;
  background: #ffffff;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  border-radius: 25px 25px 25px 25px;
`;
export const Img = styled.img`
  width: 335px;
  height: 282px;
`;
export const Info = styled.div`
  padding: 18px 10px 27px;
`;
export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #2b2b2b;
`;
export const Author = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: rgba(43, 43, 43, 0.5);
  margin-top: 13px;
`;
export const RatingConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RatingValue = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #dc9120;
`;
export const RatingVoises = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: rgba(43, 43, 43, 0.5);
`;
export const Price = styled.div`
  margin-left: 38px;
  margin-top: -10px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: #000000;

  :before {
    content: '';
    position: relative;
    background: url(${usdc});
    background-size: cover;
    width: 30px;
    height: 30px;
    display: block;
    left: -38px;
    top: 30px;
  }
`;
