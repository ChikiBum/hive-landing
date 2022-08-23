import { MockDB } from '../modules/common/services/mock-http.service';
import { HttpMethods } from '../modules/common/types';
import { BACKEND_KEYS } from '../constants/app-keys.const';
import Image from '../assets/image/CourseBanner_1.png';

export default function (baseURL: string) {
  MockDB.connection().addRecord(baseURL + '/' + BACKEND_KEYS.COURSES, {
    [HttpMethods.GET]: {
      status: 200,
      data: {
        id: '1',
        title: 'Introduction to Cryptocurrency',
        subtitle:
          'Learn the fundamentals of the Cryptocyrrency world and become an expert in less than 47 hours',
        name: 'Our Academy',
        updatedAt: 'July 2022',
        image: Image,
        reviews: 781,
        videoDuration: '58',
        rating: 5,
        countOfContent: 40,
        price: 10,
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
