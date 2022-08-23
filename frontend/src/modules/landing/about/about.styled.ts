import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 67px;
  background: ${({ theme }) => theme.colors.white};
`;

export const MiddleWrapper = styled.div`
  width: 100%;
  margin-top: 54px;
  display: flex;
  background: ${({ theme }) => theme.colors.middleAboutBg};
  justify-content: center;
  align-items: center;
  min-height: 644px;
  flex-wrap: wrap;
`;

export const BottomWrapper = styled.div`
  background: ${({ theme }) => theme.colors.footerAboutBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 1050px;
`;

export const StudentWrapper = styled.div`
  display: flex;
  margin-top: 67px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const AboutImage = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 65px;

  @media (max-width: 1360px) {
    flex-direction: column;
    justify-content: center;
  }
`;
