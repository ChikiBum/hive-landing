import styled from 'styled-components';

export const Wrapper = styled.section`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // min-height: ${({ theme }) => theme.percents.x_100};
  min-height: 100vh ;
  
`;

export const StyledTitle = styled.h2`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.x_45};
  line-height: ${({ theme }) => theme.percents.x_124};
`;

export const SeeMoreButton = styled.button`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.xl};
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spaces.x_50};
  padding: ${({ theme }) => theme.fonts.xxxxs}
    ${({ theme }) => theme.spaces.x_66};
  box-shadow: 0px 0px ${({ theme }) => theme.spaces.xxxl} rgba(0, 0, 0, 0.15);
`;
