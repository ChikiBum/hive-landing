import React, { useState } from 'react';
import { theme } from '../../../theme';
import Tabs from '../../common/components/tabs';
import TextModal from '../../common/components/text-modal';
import Title from '../../common/components/title';
import {
  Wrapper,
  MiddleWrapper,
  AboutImage,
  BottomWrapper,
} from './about.styled';
import AboutComputer from '../../../assets/image/AboutComputer.png';
import GetStarted from './getStarted';
import Crypto from './crypto';
import Articles from './articles';

const tabs = [
  { title: 'Web3 Specialized Learning' },
  { title: 'Web3 Functionality' },
  { title: 'High Earning Potential' },
];

const modalTexts = [
  {
    text: 'Study the world of',
    colored: 'Web3',
    type: 'title',
  },
  {
    text: `Kickstart your E-Learning journey and dive deep into the 
unlimited world of Web3 with our handpicked video courses on demand.`,
  },
  {
    text: '• Search through our extensive library of on-demand courses and start learning today!',
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [secondActiveTab, setSecondActiveTab] = useState(0);

  return (
    <Wrapper>
      <Title marginTop="30px" title="Why choose Our Academy?" />
      <Tabs
        marginTop="68px"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        tabs={tabs}
      />
      <MiddleWrapper>
        <TextModal
          buttonText="Explore Courses"
          fontSize={theme.fonts.x_28}
          fontWeight={theme.fontWeights.bold}
          maxWidth="721px"
          text={modalTexts}
          color={theme.colors.buttonModal}
        />
        <AboutImage src={AboutComputer} />
      </MiddleWrapper>
      <BottomWrapper>
        <GetStarted
          setActiveTab={setSecondActiveTab}
          activeTab={secondActiveTab}
        />
      </BottomWrapper>
      <Crypto />
      <Articles />
    </Wrapper>
  );
};

export default About;
