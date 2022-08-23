import { Web3Auth } from '@web3auth/web3auth';
import { network } from '../utils/eth.config';

export async function init(
  setWeb3Auth: React.Dispatch<React.SetStateAction<Web3Auth | null>>,
) {
  const web3AuthInstance = new Web3Auth({
    chainConfig: network.RINKEBY,
    clientId: process.env.REACT_APP_WEB3_AUTH_CLIENT_ID!,
  });
  await web3AuthInstance.initModal();
  setWeb3Auth(web3AuthInstance);
}
