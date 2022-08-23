import { MockDB } from '../modules/common/services/mock-http.service';
import { HttpMethods } from '../modules/common/types';
import { BACKEND_KEYS } from '../constants/app-keys.const';

export default function (baseURL: string) {
  MockDB.connection().addRecord(baseURL + '/' + BACKEND_KEYS.ARTICLES, {
    [HttpMethods.GET]: {
      status: 200,
      data: [
        {
          id: '1',
          title: '6 Biggest Crypto Mistakes to Avoid as a Beginner',
          descrition: 'The best way to learn more about crypto.',
        },
        {
          id: '2',
          title: '6 Biggest Crypto Mistakes to Avoid as a Beginner',
          descrition: 'The best way to learn more about crypto.',
        },
        {
          id: '3',
          title: '6 Biggest Crypto Mistakes to Avoid as a Beginner',
          descrition: 'The best way to learn more about crypto.',
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
