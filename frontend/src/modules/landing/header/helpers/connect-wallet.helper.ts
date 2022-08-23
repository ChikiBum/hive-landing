import { ethers } from 'ethers';
import { STORAGE_KEYS } from '../../../../constants/app-keys.const';
import { studentService } from '../../../../services/student.service';
import { toastError } from '../../../common/utils';
import { Web3Auth } from '@web3auth/web3auth';

interface IConnect {
  web3Auth: Web3Auth | null;
  setWallet: React.Dispatch<React.SetStateAction<string | null>>;
}

export async function connect({ web3Auth, setWallet }: IConnect) {
  if (!web3Auth) return toastError('web3 auth is not initialized');

  const web3authProvider = await web3Auth.connect();
  if (!web3authProvider) return toastError('no web3 auth provider');

  const eth = new ethers.providers.Web3Provider(web3authProvider);

  const signer = eth.getSigner();
  const address = await signer.getAddress();

  const data = await web3Auth.getUserInfo();

  try {
    if (!data) {
      const res = await studentService.studentAuth({ wallet: address });

      if (!res) return toastError('something went wrong');

      localStorage.setItem(STORAGE_KEYS.JWT_TOKEN_STUDENT, res.token);
      localStorage.setItem(STORAGE_KEYS.ADDRESS, address);

      setWallet(address);
      return;
    }

    const res = await studentService.studentAuth({
      wallet: address,
      ...data,
    });
    if (!res) return toastError('something went wrong');

    localStorage.setItem(STORAGE_KEYS.JWT_TOKEN_STUDENT, res.token);
    localStorage.setItem(STORAGE_KEYS.ADDRESS, address);

    setWallet(address);
  } catch (e: any) {
    toastError(e.message);
  }
}

export async function disconnect({ web3Auth, setWallet }: IConnect) {
  if (!web3Auth) return toastError('web3 auth is not initialized');

  await web3Auth.logout();
  setWallet(null);
  localStorage.removeItem(STORAGE_KEYS.JWT_TOKEN_STUDENT);
  localStorage.removeItem(STORAGE_KEYS.ADDRESS);
}
