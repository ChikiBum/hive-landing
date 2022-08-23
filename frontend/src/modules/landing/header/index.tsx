import React, { useEffect, useState } from 'react';
import headerLogo from '../../common/images/header/headerLogo.png';
import {
  Wrapper,
  Logo,
  StyledHeader,
  StyledButton,
  HeaderWrapper,
} from './header.styled';
import DropDown from './drop-down';
import HeaderBody from './content';
import { MemoizedStatisctic } from './statistic';
import { format } from '../../common/utils/wallet.utils';
import { Web3Auth } from '@web3auth/web3auth';
import { init } from './helpers/wallet.helper';
import { connect, disconnect } from './helpers/connect-wallet.helper';
import { STORAGE_KEYS } from '../../../constants/app-keys.const';

const Header = () => {
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    init(setWeb3Auth);
    const addr = localStorage.getItem(STORAGE_KEYS.ADDRESS);
    if (addr) setWallet(addr);
  }, []);

  const connectWallet = async () => {
    connect({ web3Auth, setWallet });
  };

  const disconnectWallet = async () => {
    disconnect({ web3Auth, setWallet });
  };

  return (
    <Wrapper>
      <StyledHeader>
        <Logo>
          <img src={headerLogo} alt="header logo" />
        </Logo>
        <HeaderWrapper>
          <DropDown />
          <StyledButton
            type="button"
            onClick={!wallet ? connectWallet : disconnectWallet}
          >
            {!wallet ? 'Connect Wallet' : format(wallet)}
          </StyledButton>
        </HeaderWrapper>
      </StyledHeader>
      <HeaderBody />
      <MemoizedStatisctic />
    </Wrapper>
  );
};

export default Header;
