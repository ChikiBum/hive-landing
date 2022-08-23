import React, { FC } from 'react';
import StarIcon from '@material-ui/icons/Star';
import {
  Banner,
  Dought,
  InfoWrapper,
  RaitingNumber,
  RaitingWrapper,
  SubInfoItem,
  SubInfoWrapper,
  Wrapper,
  Ratings,
  MainPriceWrapper,
  PriceWrapper,
  PriceSymb,
  Price,
  Updated,
} from './course-card.styled';
import Title from '../../../common/components/title';
import { theme } from '../../../../theme';
import { Button } from '../../../common/components/button';
import Coin from '../../../../assets/image/UsdcCoin.png';
import Badge, { badgeClasses } from '@mui/material/Badge';

interface ICardProps {
  index: number;
  image: string;
  title: string;
  subtitle: string;
  name: string;
  updatedAt: string;
  videoDuration: string;
  countOfContent: string;
  rating: number;
  reviews: string;
  price: string;
}

const CourseCard: FC<ICardProps> = ({
  index,
  image,
  title,
  subtitle,
  name,
  updatedAt,
  videoDuration,
  countOfContent,
  rating,
  reviews,
  price,
}) => {
  const starsStyle = { opacity: 0.55 };

  // const course = getCourses().data;

  return (
    <Badge
      sx={{
        [`& .${badgeClasses.badge}`]: {
          padding: '26px 16px',
          borderRadius: '50%',
          top: '11px',
          left: '11px',
          background: theme.colors.mainYellowGradientStart,
          fontSize: '18px',
          fontWeight: theme.fontWeight.w_500,
        },
      }}
      badgeContent={`#${index + 1}`}
      color="primary"
      variant="standard"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Wrapper>
        <Banner src={image} />
        <InfoWrapper>
          <Title
            fontSize={theme.fonts.md}
            fontWeight={theme.fontWeight.w_600}
            title={title}
          ></Title>
          <Title
            fontWeight={theme.fontWeight.w_400}
            fontSize={theme.fonts.xxs}
            title={subtitle}
          />
          <Title
            fontWeight={theme.fontWeights.w_600}
            fontSize={theme.fonts.xxxs}
            title={`by ${name}`}
            color={theme.colors.courseAuthor}
          />
          <SubInfoWrapper>
            <SubInfoItem>
              <Updated>Updated</Updated>

              <SubInfoItem fontWeight={theme.fontWeight.w_600}>
                {updatedAt}
              </SubInfoItem>
              <Dought>•</Dought>
            </SubInfoItem>
            <SubInfoItem>
              {videoDuration} total hours
              <Dought>•</Dought>
            </SubInfoItem>
            <SubInfoItem>
              {countOfContent} lectures
              <Dought>•</Dought>
            </SubInfoItem>
          </SubInfoWrapper>
          <RaitingWrapper>
            <RaitingNumber>{rating}</RaitingNumber>
            <Ratings
              name="read-only"
              value={rating}
              precision={0.1}
              readOnly
              emptyIcon={<StarIcon style={starsStyle} />}
            />
            <Title
              title={`(${reviews} reviews)`}
              fontSize={theme.fonts.xxs}
              fontWeight={theme.fontWeights.medium}
              color={theme.colors.greyText}
            />
          </RaitingWrapper>
          <MainPriceWrapper>
            <PriceWrapper>
              <PriceSymb src={Coin} />
              <Price>{price ? price : 'FREE'} USDC</Price>
            </PriceWrapper>
            <Button
              color={theme.colors.white}
              background={theme.colors.buttonModal}
              fontSize={14}
              fontWeight={400}
              text="Enroll Now"
              borderRadius={25}
              height="30px"
              width="130px"
            />
          </MainPriceWrapper>
        </InfoWrapper>
      </Wrapper>
    </Badge>
  );
};

export default CourseCard;
