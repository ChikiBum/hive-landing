export interface IExample {
  test: string;
}

interface StatisticItem {
  count: string;
  text: string;
}

export interface IStatistic {
  totalStudents: StatisticItem;
  totalUSDC: StatisticItem;
  totalCourses: StatisticItem;
  totalWatched: StatisticItem;
}
export interface ITrending {
  id: string;
  img: any;
  name: string;
  author: string;
  reiting: number;
  reviews: number;
  price: string;
}
