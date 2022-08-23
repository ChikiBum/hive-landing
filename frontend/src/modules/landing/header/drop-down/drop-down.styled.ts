import styled from 'styled-components';

export const StyledSelect = styled.select`
  border: none;
  outline: none;
  font-size: 1.25rem;
  line-height: 1.1;
  background-color: transparent;
  font-family: 'Poppins';
  font-weight: ${({ theme }) => theme.fontWeight.w_500};
  font-size: ${({ theme }) => theme.fonts.md};
  }
`;
