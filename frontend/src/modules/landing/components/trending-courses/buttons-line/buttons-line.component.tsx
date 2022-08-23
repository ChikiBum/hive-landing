import React from 'react';
import * as Styled from './buttons-line.styled';
import { theme } from '../../../../../theme/index';
interface IButtonsLineProps {
  category: Array<string>;
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
}

const ButtonsLine: React.FC<IButtonsLineProps> = ({
  category,
  setCategory,
}) => {
  const categorys = [
    { title: 'DeFi', data: 'defi', marginLeft: theme.spaces.lg },
    { title: 'NFTs', data: 'nfts' },
    { title: 'Blockchain', data: 'blockchain' },
    { title: 'Smart Contracts', data: 'smartContracts' },
    {
      title: 'Technical Analysis',
      data: 'technicalAnalysis',
      marginRigth: theme.spaces.lg,
    },
    {
      title: 'Cryptocurrency',
      data: 'cryptocurrency',
      marginTop: theme.spaces.x_52,
    },
    {
      title: 'Crypto Investing',
      data: 'cryptoInvesting',
      marginTop: theme.spaces.x_52,
    },
    {
      title: 'Fundamental Analysis',
      data: 'fundamentalAnalysis',
      marginTop: theme.spaces.x_52,
    },
    {
      title: 'Web Development',
      data: 'webDevelopment',
      marginTop: theme.spaces.x_52,
    },
  ];
  const setCategoryHandler = ({ target }: any) => {
    if (category.includes(target.getAttribute('data'))) {
      setCategory(category.filter((cat) => cat != target.getAttribute('data')));
    } else {
      setCategory((prev) => [...prev, target.getAttribute('data')]);
    }
  };
  return (
    <>
      {categorys.map((cat) => {
        return (
          <Styled.Btn
            key={cat.title}
            data={cat.data}
            marginLeft={cat.marginLeft}
            marginTop={cat.marginTop}
            marginRigth={cat.marginRigth}
            onClick={setCategoryHandler}
            active={category.includes(cat.data)}
          >
            {cat.title}
          </Styled.Btn>
        );
      })}
    </>
  );
};
export default ButtonsLine;
