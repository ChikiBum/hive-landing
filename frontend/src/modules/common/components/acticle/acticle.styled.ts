import styled from 'styled-components';

export const ActicleItem = styled.div`
  border-right: 2px solid ${({ theme }) => theme.colors.borderActicleRight};
  margin-right: 20px;
  text-align: start;
  max-width: 492px;
  margin-top: 35px;

  &:last-child {
    border-right: 0px;
    margin-right: 0px;
  }
`;

export const Arrow = styled.img`
  width: 12px;
  height: 20px;
  margin-left: 7px;
`;

export const SeeMoreWrapper = styled.div`
  display: flex;
  margin-top: 53px;
  align-items: center;
`;
