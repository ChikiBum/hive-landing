import styled from 'styled-components';

export const Wrapper = styled.section`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 914px;
  text-align: center;
  position: relative;
  padding-top: 0px;
`;

export const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.x_45};
  position: absolute;
  top: 130px;
`;

export const SeeMoreButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.w_600};
  font-size: ${({ theme }) => theme.fonts.xl};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spaces.x_50};
  padding: ${({ theme }) => theme.fonts.xxxxs}
    ${({ theme }) => theme.spaces.x_66};
  box-shadow: 0px 0px ${({ theme }) => theme.spaces.xxxl} rgba(0, 0, 0, 0.15);
  margin-top: 103px;
  position: absolute;
  bottom: -60px;
`;
