import React from 'react';
import { theme } from '../../../theme';
import CourseCard from '../../common/components/course-card';
import Title from '../../common/components/title';

const Crypto = () => {
  return (
    <>
      <Title marginTop="29px" title="New to crypto?" />
      <Title
        marginTop="11px"
        fontSize={theme.fonts.xxl}
        fontWeight={theme.fontWeights.medium}
        title="Get started with our free courses"
      />
      <CourseCard />
    </>
  );
};

export default Crypto;
