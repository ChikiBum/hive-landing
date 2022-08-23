import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.colors.mainYellowGradientStart};
  width: ${({ theme }) => theme.percents.x_100};
  height: ${({ theme }) => theme.percents.x_40};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.percents.x_15};
`;

export const LeftBlock = styled.div`
  background: transparent;
  width: ${({ theme }) => theme.percents.x_25};
  height: ${({ theme }) => theme.percents.x_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4% 2% 8%;
`;
export const CenterLeftBlock = styled.div`
  background: transparent;
  width: ${({ theme }) => theme.percents.x_21};
  height: ${({ theme }) => theme.percents.x_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2% 2% 2%;
`;
export const CenterRightBlock = styled.div`
  background: transparent;
  width: ${({ theme }) => theme.percents.x_22};
  height: ${({ theme }) => theme.percents.x_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4% 2% 4%;
`;

export const RightBlock = styled.div`
  background: transparent;
  width: ${({ theme }) => theme.percents.x_32};
  height: ${({ theme }) => theme.percents.x_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 8% 2% 5%;
`;

export const VerticalLine = styled.div`
  background: white;
  width: 1px;
  height: ${({ theme }) => theme.percents.x_77};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
