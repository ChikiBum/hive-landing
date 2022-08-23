import { MockDB } from '../modules/common/services/mock-http.service';
import { HttpMethods } from '../modules/common/types';
import { BACKEND_KEYS } from '../constants/app-keys.const';

export default function (baseURL: string) {
  MockDB.connection().addRecord(baseURL + '/' + BACKEND_KEYS.STATISTIC, {
    [HttpMethods.GET]: {
      status: 200,
      data: {
        totalStudents: {
          count: '7,518',
          text: 'Number of total students',
        },
        totalUSDC: {
          count: '145,518',
          text: 'Total USDC paid to Instructors',
        },
        totalCourses: {
          count: '193',
          text: 'Total courses on the platform',
        },
        totalWatched: {
          count: '5,145,518',
          text: 'Number of total minutes watched by students',
        },
      },
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
