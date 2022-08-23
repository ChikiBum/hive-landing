import styled from 'styled-components';

export const Wrapper = styled.section`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // min-height: ${({ theme }) => theme.percents.x_100};
  min-height: 200vh;
  padding: 0 5%;
`;

export const StyledTitle = styled.h2`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.x_45};
  line-height: ${({ theme }) => theme.percents.x_124};
`;

export const CardsGridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${({ theme }) => theme.percents.x_2};
  padding: ${({ theme }) => theme.percents.x_1}
    ${({ theme }) => theme.percents.x_1};
  height: 135vh;
  overflow-y: scroll;
`;

export const SeeMoreButton = styled.button`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.xl};
  color: ${({ theme }) => theme.colors.black};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spaces.x_50};
  padding: ${({ theme }) => theme.fonts.xxxxs}
    ${({ theme }) => theme.spaces.x_66};
  box-shadow: 0px 0px ${({ theme }) => theme.spaces.xxxl} rgba(0, 0, 0, 0.15);

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export const DescriptionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  background: ${({ theme }) => theme.colors.bestSellers};
  margin-bottom: ${({ theme }) => theme.percents.x_5}; ;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: ${({ theme }) => theme.percents.x_100};
  width: ${({ theme }) => theme.percents.x_70};
  margin-left: auto;
`;

export const DescriptionTitle = styled.h3`
  margin-right: auto;
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.x_45};
  line-height: ${({ theme }) => theme.spaces.x_56};
  color: ${({ theme }) => theme.colors.black};

  & span {
    color: ${({ theme }) => theme.colors.mainYellowGradientStart};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: ${({ theme }) => theme.percents.x_50};
  width: ${({ theme }) => theme.percents.x_100};
  margin-left: auto;

  & span {
    font-weight: ${({ theme }) => theme.fontWeight.w_500};
    font-size: ${({ theme }) => theme.fonts.xl};
    line-height: ${({ theme }) => theme.spaces.x_36};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const DescriptionImage = styled.img`
  display: block;
  width: ${({ theme }) => theme.percents.x_50};
  height: ${({ theme }) => theme.percents.x_100};
  margin-right: auto;
`;
