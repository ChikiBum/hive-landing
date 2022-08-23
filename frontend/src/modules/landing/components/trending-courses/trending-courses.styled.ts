import styled from 'styled-components';
import bg from '../../images/trending-courses/bg.jpg';

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${bg});
  width: ${({ theme }) => theme.percents.x_100};
  padding-left: ${({ theme }) => theme.spaces.x_114};
  padding-right: ${({ theme }) => theme.spaces.x_114};
`;
export const Text = styled.div`
  font-style: normal;
  font-weight: ${({ theme }) => theme.weight.w_700};
  font-size: ${({ theme }) => theme.fonts.x_28};

  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spaces.x_158};
`;

export const BtnFirstLine = styled.div`
  width: ${({ theme }) => theme.percents.x_84};
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spaces.x_64};
  flex-wrap: wrap;
`;
export const BtnSecondtLine = styled.div`
  width: ${({ theme }) => theme.percents.x_84};
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spaces.x_53};
`;
