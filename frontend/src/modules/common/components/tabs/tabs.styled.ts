import styled from 'styled-components';
import { theme } from '../../../../theme';

export const WrapperTabs = styled.div<{ marginTop?: string }>`
  padding: 14px;
  box-shadow: 0px 0px 38px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  display: flex;
  width: fit-content;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop};
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 1088px) {
    flex-direction: column;
  }
`;

export const Tab = styled.div<{ isActive: boolean }>`
  box-shadow: ${({ isActive }) =>
    isActive ? '0px 3px 17px 1px rgba(0, 0, 0, 0.15)' : null};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 32px 16px 33px;
  background-size: 100%;
  background-image: ${({ theme, isActive }) =>
    isActive ? theme.colors.tabActiveMode : theme.colors.black};
  background-clip: text;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-size: ${({ theme }) => theme.fonts.lg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ isActive }) =>
    isActive ? 'transparent' : theme.colors.black};

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.15);
  }
`;
