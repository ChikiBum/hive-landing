import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  min-height: ${({ theme }) => theme.percents.x_100};
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0.33) 0%,
    rgba(202, 202, 202, 0.168438) 82.7%,
    rgba(187, 187, 187, 0) 94.37%
  );
  display: grid;
  grid-template:
    minmax(${({ theme }) => theme.percents.x_15}, auto)
    1fr
    minmax(${({ theme }) => theme.percents.xxxxl}, auto) / 1fr;
`;

export const StyledHeader = styled.nav`
  display: inline-grid;
  // grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 1fr 3fr;
  justify-items: start;
  padding: ${({ theme }) => theme.percents.x_3}
    ${({ theme }) => theme.percents.x_7};
`;

export const Logo = styled.div`
  // width: ${({ theme }) => theme.percents.x_21};
  display: inline-grid;
  justify-items: start;
  align-items: center;
`;

export const StyledButton = styled.button`
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_700};
  font-size: ${({ theme }) => theme.fonts.md};
  letter-spacing: 0.002em;
  color: ${({ theme }) => theme.colors.mainYellowGradientStart};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.mainYellowGradientStart};
  border-radius: 50px;
  padding: ${({ theme }) => theme.percents.x_1}
    ${({ theme }) => theme.percents.x_3};
  cursor: pointer;
`;

export const HeaderWrapper = styled.div`
  width: ${({ theme }) => theme.percents.x_100};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
