import React from 'react';
import { StyledSelect } from './drop-down.styled';

const DropDown = () => {
  return (
    <>
      <StyledSelect name="categories" id="categories">
        <option value="Explore Categories">Explore Categories</option>
      </StyledSelect>
    </>
  );
};

export default DropDown;
