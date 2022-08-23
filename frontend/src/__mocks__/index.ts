import exampleInit from './example.mock';
import courses from './courses.mock';
import articles from './articles.mock';
import trendings from './trending-courses-data';
import { getCourse, getArticle, getTrending } from './getData';

const baseURL = process.env.REACT_APP_SERVER_URL || '';

import headerStatistic from './headerStatistic.mock';

export function initMocks() {
  exampleInit(baseURL);
  courses(baseURL);
  articles(baseURL);
  trendings(baseURL);
}

export function getCourses() {
  return getCourse(baseURL);
}

export function getArticles() {
  return getArticle(baseURL);
}
export function getTrendings() {
  return getTrending(baseURL);
}

headerStatistic(baseURL);
