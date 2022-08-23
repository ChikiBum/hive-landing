import { MockDB } from '../modules/common/services/mock-http.service';
import { HttpMethods } from '../modules/common/types';
import { BACKEND_KEYS } from '../constants/app-keys.const';

export default function (baseURL: string) {
  MockDB.connection().addRecord(baseURL + '/' + BACKEND_KEYS.TRENDING, {
    [HttpMethods.GET]: {
      status: 200,
      data: [
        {
          id: '1',
          img: 'sdf',
          name: 'Crypto Investing for Beginners:The Complete Guide',
          author: 'Filip Kordanovski',
          reiting: 4.1,
          reviews: 761,
          price: '1,399 USDC',
        },
        {
          id: '2',
          img: 'ardImg',
          name: 'Crypto Investing for Beginners:The Complete Guide',
          author: 'Filip Kordanovski',
          reiting: 4.1,
          reviews: 761,
          price: '1,399 USDC',
        },
        {
          id: '3',
          img: 'cardImg',
          name: 'Crypto Investing for Beginners:The Complete Guide',
          author: 'Filip Kordanovski',
          reiting: 4.1,
          reviews: 761,
          price: '1,399 USDC',
        },
        {
          id: '4',
          img: 'cardImg',
          name: 'Crypto Investing for Beginners:The Complete Guide',
          author: 'Filip Kordanovski',
          reiting: 4.1,
          reviews: 761,
          price: '1,399 USDC',
        },
        {
          id: '5',
          img: 'cardImg',
          name: 'Crypto Investing for Beginners:The Complete Guide',
          author: 'Filip Kordanovski',
          reiting: 4.1,
          reviews: 761,
          price: '1,399 USDC',
        },
      ],
    },
    [HttpMethods.POST]: {
      status: 200,
      data: {
        test: 'post',
      },
    },
    [HttpMethods.PUT]: {
      status: 200,
      data: {
        test: 'put',
      },
    },
    [HttpMethods.DELETE]: {
      status: 200,
      data: {
        test: 'delete',
      },
    },
  });
}
