import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto sans-serif;
  color: #${({ theme }) => theme.colors.primary_white};
  margin-top: 130px;
  padding: ${({ theme }) => theme.spaces.xs};
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.md};
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.xs};
  font-weight: 600;
`;

export const Logo = styled.div`
  display: flex;
`;
