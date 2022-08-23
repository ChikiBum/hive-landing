import React from 'react';

import * as Styled from './foot.styled';
import { theme } from '../../../../theme/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../../landing/images/footer/l.png';
import logoHive from '../../../landing/images/footer/small-logo1.png';
import logoHexagon from '../../../landing/images/footer/small-logo2.png';

const Footer = () => {
  return (
    <Styled.Foter>
      <Styled.Conteiner>
        <Styled.Col width={theme.percents.x_63}>
          <Styled.Logo src={logo} />
          <Styled.Text
            fontWeight={theme.weight.w_500}
            fontSize={theme.fonts.xxs}
            marginTop={theme.spaces.x_44}
          >
            Our Investments is a Polygon based DeFi as a Service (DaaS) protocol
            that allows Our NFT holders to reap sustainable DeFi yields in the
            form of our $HNY token, which is paid out as daily rewards
          </Styled.Text>
          <Styled.Text
            fontWeight={theme.weight.w_700}
            fontSize={theme.fonts.lg}
            marginTop={theme.spaces.x_44}
          >
            Our Academy 2022
          </Styled.Text>
        </Styled.Col>
        <Styled.Col marginTop={theme.spaces.x_23} width={theme.percents.x_74}>
          <Styled.Text
            fontWeight={theme.weight.w_700}
            fontSize={theme.fonts.lg}
          >
            Community & Socials
          </Styled.Text>
          <Styled.SocialLinksConteiner>
            <Styled.SocialLink href="https://www.discord">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </Styled.SocialLink>
            <Styled.SocialLink href="https://www.instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Styled.SocialLink>
            <Styled.SocialLink href="https://www.facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Styled.SocialLink>
            <Styled.SocialLink href="https://www.twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Styled.SocialLink>
          </Styled.SocialLinksConteiner>
        </Styled.Col>
        <Styled.Col marginTop={theme.spaces.x_23} width={theme.percents.x_80}>
          <Styled.Text
            fontWeight={theme.weight.w_700}
            fontSize={theme.fonts.lg}
          >
            Company
          </Styled.Text>
          <Styled.List>
            <Styled.ListItem>
              <Styled.LinkCompanyAndLinks fontWeight={theme.weight.w_500}>
                About us
              </Styled.LinkCompanyAndLinks>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.LinkCompanyAndLinks fontWeight={theme.weight.w_500}>
                FAQ
              </Styled.LinkCompanyAndLinks>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.LinkCompanyAndLinks fontWeight={theme.weight.w_500}>
                Privacy Policy
              </Styled.LinkCompanyAndLinks>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.LinkCompanyAndLinks fontWeight={theme.weight.w_500}>
                Terms of Service
              </Styled.LinkCompanyAndLinks>
            </Styled.ListItem>
          </Styled.List>
        </Styled.Col>
        <Styled.Col marginTop={theme.spaces.x_23} width={theme.percents.x_100}>
          <Styled.Text
            fontWeight={theme.weight.w_700}
            fontSize={theme.fonts.lg}
          >
            Links
          </Styled.Text>
          <Styled.LinkConteinerCol4
            img={logoHive}
            widthBef={theme.spaces.xxxl}
            heigthBef={theme.spaces.x_39}
            marginLeft={theme.spaces.xxxxl}
          >
            <Styled.LinkCompanyAndLinks fontWeight={theme.weight.w_600}>
              Hive Investments
            </Styled.LinkCompanyAndLinks>
          </Styled.LinkConteinerCol4>
          <Styled.LinkConteinerCol4
            img={logoHexagon}
            widthBef={theme.spaces.x_34}
            heigthBef={theme.spaces.x_38}
            marginLeft={theme.spaces.x_50}
          >
            <Styled.LinkCompanyAndLinks fontWeight={theme.weight.w_600}>
              Hexagon
            </Styled.LinkCompanyAndLinks>
          </Styled.LinkConteinerCol4>
        </Styled.Col>
      </Styled.Conteiner>
    </Styled.Foter>
  );
};
export default Footer;
