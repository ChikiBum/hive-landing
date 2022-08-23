import { CHAIN_NAMESPACES } from '@web3auth/base';

export const rinkeby = {
  displayName: 'Ethereum Rinkeby',
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: '0x4',
  rpcTarget: 'https://rinkeby.infura.io/v3/776218ac4734478c90191dde8cae483c',
  blockExplorer: 'https://rinkeby.etherscan.io/',
  ticker: 'ETH',
  tickerName: 'Ethereum',
};

export const polygon = {
  displayName: 'Polygon',
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: '0x89',
  rpcTarget: 'https://polygonscan.com',
};

export const polygonTestnet = {
  displayName: 'Polygon Testnet',
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: '0x13881',
  rpcTarget: 'https://mumbai.polygonscan.com',
};

export enum ENetwork {
  POLYGON = 'POLYGON',
  POLYGON_TESTNET = 'POLYGON_TESTNET',
  RINKEBY = 'RINKEBY',
}

export const network = {
  POLYGON: polygon,
  POLYGON_TESTNET: polygonTestnet,
  RINKEBY: rinkeby,
};
