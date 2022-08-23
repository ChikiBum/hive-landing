import { BACKEND_KEYS } from '../constants/app-keys.const';
import { MockDB } from '../modules/common/services/mock-http.service';
import { HttpMethods } from '../modules/common/types';

export const getCourse = (baseURL: string) => {
  return MockDB.connection().getRecord(
    baseURL + '/' + BACKEND_KEYS.COURSES,
    HttpMethods.GET,
  );
};

export const getArticle = (baseURL: string) => {
  return MockDB.connection().getRecord(
    baseURL + '/' + BACKEND_KEYS.ARTICLES,
    HttpMethods.GET,
  );
};
export const getTrending = (baseURL: string) => {
  return MockDB.connection().getRecord(
    baseURL + '/' + BACKEND_KEYS.TRENDING,
    HttpMethods.GET,
  );
};
