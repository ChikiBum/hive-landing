import React, { memo } from 'react';
import { useQuery } from 'react-query';
import { headerStatisticService } from '../../services/header-statistic.service';
import {
  ContentWrapper,
  LeftBlock,
  RightBlock,
  CenterLeftBlock,
  CenterRightBlock,
  VerticalLine,
} from './statistic.styled';
import { QUERY_KEYS } from './../../../../constants/app-keys.const';
import BottomRowText from './statisticText';

const Statistic = () => {
  const { data, isLoading, error } = useQuery(
    QUERY_KEYS.STATISTIC,
    async () => headerStatisticService.getStatistic(),
    {
      refetchOnMount: true,
    },
  );

  if (isLoading) return <p>Downloading...</p>;

  if (error) return <p>Downloading error!</p>;

  return (
    <ContentWrapper>
      <LeftBlock>
        <BottomRowText
          count={data?.totalStudents.count}
          text={data?.totalStudents.text}
        />
      </LeftBlock>
      <VerticalLine />
      <CenterLeftBlock>
        <BottomRowText
          count={data?.totalUSDC.count}
          text={data?.totalUSDC.text}
        />
      </CenterLeftBlock>
      <VerticalLine />
      <CenterRightBlock>
        <BottomRowText
          count={data?.totalCourses.count}
          text={data?.totalCourses.text}
        />
      </CenterRightBlock>
      <VerticalLine />
      <RightBlock>
        <BottomRowText
          count={data?.totalWatched.count}
          text={data?.totalWatched.text}
        />
      </RightBlock>
    </ContentWrapper>
  );
};

export const MemoizedStatisctic = memo(Statistic);
