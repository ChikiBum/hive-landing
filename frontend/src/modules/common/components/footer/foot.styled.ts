import styled from 'styled-components';
import {
  IColProps,
  ITextProps,
  LinkConteinerCol4Props,
  LinkCompanyAndLinksProps,
} from '../../types/footer.type';

export const Foter = styled.footer`
  background: linear-gradient(
    99.24deg,
    ${({ theme }) => theme.colors.mainYellowGradientStart} 10.54%,
    ${({ theme }) => theme.colors.mainYellowGradientEnd} 92.91%
  );
  padding-top: ${({ theme }) => theme.spaces.x_62};
  padding-bottom: ${({ theme }) => theme.spaces.x_78};
  padding-left: ${({ theme }) => theme.percents.sm};
  padding-right: ${({ theme }) => theme.percents.sm};
`;
export const Conteiner = styled.div`
  display: grid;
  max-width: ${({ theme }) => theme.spaces.x_1920};
  grid-template-columns: ${({ theme }) => theme.percents.xxxl} ${({ theme }) =>
      theme.percents.x_27} ${({ theme }) => theme.percents.x_17} ${({
      theme,
    }) => theme.percents.x_16};
`;
export const Logo = styled.img`
  width: ${({ theme }) => theme.percents.x_100};
  object-fit: fill;
`;
export const Col = styled.div<IColProps>`
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
`;
export const Text = styled.div<ITextProps>`
  color: ${({ theme }) => theme.colors.footerText};
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin-top: ${(props) => props.marginTop};
`;
export const List = styled.ul`
  margin-top: ${({ theme }) => theme.spaces.x_39};
  width: ${({ theme }) => theme.percents.x_100};
`;
export const ListItem = styled.li`
  margin-top: ${({ theme }) => theme.spaces.x_22};
`;
export const SocialLink = styled.a`
  transition: transform 250ms;
  display: inline-block;
  color: ${({ theme }) => theme.colors.footerText};
  :hover {
    transform: translateY(-${({ theme }) => theme.spaces.x_2});
  }
`;
export const SocialLinksConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spaces.x_39};
  width: ${({ theme }) => theme.percents.x_100};
`;

export const LinkConteinerCol4 = styled.div<LinkConteinerCol4Props>`
  margin-left: ${(props) => props.marginLeft};
  margin-top: -${({ theme }) => theme.spaces.x_16};
  margin-bottom: ${({ theme }) => theme.spaces.xxs};
  width: ${({ theme }) => theme.percents.x_100};
  :before {
    content: '';
    position: relative;
    background: url(${(props) => props.img});
    background-size: cover;
    width: ${(props) => props.widthBef};
    height: ${(props) => props.heigthBef};
    display: block;
    left: -${({ theme }) => theme.spaces.x_50};
    top: ${({ theme }) => theme.spaces.x_36};
  }
`;
export const LinkCompanyAndLinks = styled.a<LinkCompanyAndLinksProps>`
  color: ${({ theme }) => theme.colors.footerText};
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${({ theme }) => theme.fonts.xs};
  color: ${({ theme }) => theme.colors.footerText};
  :hover {
    cursor: pointer;
  }
`;
