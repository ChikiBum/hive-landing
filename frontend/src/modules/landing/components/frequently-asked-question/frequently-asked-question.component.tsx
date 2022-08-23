import React, { useState } from 'react';
import * as Styled from './faq.styled';
import { theme } from '../../../../theme/index';
import AcordeonSection from '../acordeon/acordeon-section.component';

const Faq = () => {
  const [isActive, setisActive] = useState<string>('1');

  const handleClick = ({ target }: any) => {
    setisActive(target.getAttribute('data'));
  };

  return (
    <Styled.Conteiner>
      <Styled.Text>FAQ</Styled.Text>
      <Styled.ToggleGroup>
        <Styled.ToggleText
          data={'1'}
          onClick={handleClick}
          marginLeft={theme.spaces.x_47}
          active={isActive === '1'}
        >
          Web3 Specialized Learning
        </Styled.ToggleText>
        <Styled.ToggleText
          data={'2'}
          onClick={handleClick}
          active={isActive === '2'}
        >
          Web3 Functionality
        </Styled.ToggleText>
        <Styled.ToggleText
          data={'3'}
          onClick={handleClick}
          marginRight={theme.spaces.x_47}
          active={isActive === '3'}
        >
          High Earning Potential
        </Styled.ToggleText>
      </Styled.ToggleGroup>
      <Styled.AcordeonWraper active={isActive === '1'}>
        <AcordeonSection
          name="How can I apply to become an Instructor?"
          text=" Boost your knowledge skills and dive deep into the unlimited world
          of Web3 with our blog artciles from professional writers. Search
          through our extensive library of blog articles and start learning
          today!Search through our extensive library of blog articles and
          start learning today!"
        />

        <AcordeonSection
          name="How can I apply to become an Instructor?"
          text=" Boost your knowledge skills and dive deep into the unlimited world
          of Web3 with our blog artciles from professional writers. Search
          through our extensive library of blog articles and start learning
          today!Search through our extensive library of blog articles and
          start learning today!"
        />
      </Styled.AcordeonWraper>
      {/* second acordeon */}
      <Styled.AcordeonWraper active={isActive === '2'}>
        <AcordeonSection
          name="How can I apply to become an Instructor?2"
          text=" Boost your knowledge skills and dive deep into the unlimited world
          of Web3 with our blog artciles from professional writers. Search
          through our extensive library of blog articles and start learning
          today!Search through our extensive library of blog articles and
          start learning today!"
        />

        <AcordeonSection
          name="How can I apply to become an Instructor?"
          text=" Boost your knowledge skills and dive deep into the unlimited world
          of Web3 with our blog artciles from professional writers. Search
          through our extensive library of blog articles and start learning
          today!Search through our extensive library of blog articles and
          start learning today!"
        />
      </Styled.AcordeonWraper>
      {/* third acordeon */}
      <Styled.AcordeonWraper active={isActive === '3'}>
        <AcordeonSection
          name="How can I apply to become an Instructor?3"
          text=" Boost your knowledge skills and dive deep into the unlimited world
          of Web3 with our blog artciles from professional writers. Search
          through our extensive library of blog articles and start learning
          today!Search through our extensive library of blog articles and
          start learning today!"
        />

        <AcordeonSection
          name="How can I apply to become an Instructor?"
          text=" Boost your knowledge skills and dive deep into the unlimited world
          of Web3 with our blog artciles from professional writers. Search
          through our extensive library of blog articles and start learning
          today!Search through our extensive library of blog articles and
          start learning today!"
        />
      </Styled.AcordeonWraper>
    </Styled.Conteiner>
  );
};
export default Faq;
