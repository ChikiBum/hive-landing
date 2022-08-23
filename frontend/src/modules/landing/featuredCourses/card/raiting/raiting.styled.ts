import styled from 'styled-components';

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces.xxs};
`;

export const Reviews = styled.span`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_500};
  font-size: ${({ theme }) => theme.fonts.xxs};
  line-height: ${({ theme }) => theme.percents.x_124};
  color: rgba(43, 43, 43, 0.5);
`;
