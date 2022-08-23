import React, { useState } from 'react';
import * as Styled from './acordeon-section.styled';
import { IPropsAcordeonSection } from '../../types/acordeon-section.types';
import img from '../../images/faq/vector.png';

const AcordeonSection: React.FC<IPropsAcordeonSection> = ({ name, text }) => {
  const [propFirstAcordion, setPropFirstAcordion] = useState(false);

  const handleClickFirstAcordion = () => {
    setPropFirstAcordion(!propFirstAcordion);
  };
  return (
    <Styled.AcordeonConteiner>
      <Styled.AcordeonElemeynt onClick={handleClickFirstAcordion}>
        <Styled.AcordeonName>{name}</Styled.AcordeonName>
        <Styled.AcordeonImg src={img} active={propFirstAcordion} />
      </Styled.AcordeonElemeynt>
      <Styled.AcordeonText active={propFirstAcordion}>
        {text}
      </Styled.AcordeonText>
    </Styled.AcordeonConteiner>
  );
};

export default AcordeonSection;
