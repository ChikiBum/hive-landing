import React from 'react';
import { ChangeEvent } from 'react';
import { Styled } from './search-bar.styled';

export interface IInputProps {
  name: string;
  placeholder: string;
  onChange: (text: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<IInputProps> = ({ placeholder, onChange }) => {
  return (
    <>
      <Styled.IconContainer>
        {/* <Styled.SearchIcons /> */}
      </Styled.IconContainer>
      <Styled.Input placeholder={placeholder} onChange={(e) => onChange(e)} />
    </>
  );
};
export default SearchBar;
