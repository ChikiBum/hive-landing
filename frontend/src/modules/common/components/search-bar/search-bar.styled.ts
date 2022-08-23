import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const IconContainer = styled.div`
  position: absolute;
  margin-top: ${({ theme }) => theme.spaces.xs};
  margin-left: ${({ theme }) => theme.spaces.xxs};
`;

const Input = styled.input`
  width: 32%;
  height: ${({ theme }) => theme.spaces.xxxl};
  background: ${({ theme }) => theme.colors.primary_white};
  color: ${({ theme }) => theme.colors.primary_black};
  padding-left: ${({ theme }) => theme.spaces.xl};
  margin-bottom: ${({ theme }) => theme.spaces.sm};

  font-size: ${({ theme }) => theme.fonts.xs};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary_grey};
  border-radius: 10px;
  cursor: text;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary_grey};
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  }
`;

const SearchIcons = styled(SearchIcon)`
  && {
    color: ${({ theme }) => theme.colors.primary_black};
    border-radius: 0;
  }
`;
export const Styled = {
  Input,
  SearchIcons,
  IconContainer,
};
