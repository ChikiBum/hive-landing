import React from 'react';
import { theme } from '../../../theme';
import Tabs from '../../common/components/tabs';
import Title from '../../common/components/title';
import { AboutImage, StudentWrapper } from './about.styled';
import StudentImage from '../../../assets/image/Student.png';
import TextModal from '../../common/components/text-modal';
import ModalBg from '../../../assets/image/ModalBg.png';

const startedTabs = [
  {
    title: 'For Students',
  },
  {
    title: 'For Instructors',
  },
];

const buttons = [
  {
    text: 'Your Wallet',
    colored: 'Connect',
  },
  {
    text: 'Courses',
    colored: 'Browse',
  },
  {
    text: 'Start',
    colored: 'Learning',
    end: true,
  },
];

interface IGetStartedProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const GetStarted = ({ activeTab, setActiveTab }: IGetStartedProps) => {
  return (
    <>
      <Title title="How to Get Started?" color={theme.colors.white} />
      <Title
        maxWidth="801px"
        color={theme.colors.white}
        fontSize={theme.fonts.xxl}
        fontWeight={theme.fontWeights.medium}
        title="Whether you’re interested in learning or teaching, we’ve got something for you"
      />
      <Tabs
        marginTop="52px"
        tabs={startedTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <StudentWrapper>
        <AboutImage width="569px" height="517px" src={StudentImage} />
        <TextModal
          backgroundImage={ModalBg}
          minWidth="53%"
          fontSize={theme.fonts.x_28}
          fontWeight={theme.fontWeights.bold}
          maxWidth="721px"
          color={theme.colors.buttonModal}
          contentType="buttons"
          buttons={buttons}
        />
      </StudentWrapper>
    </>
  );
};

export default GetStarted;
