import { HttpFactoryService } from '../../common/services/http-factory.service';
import { EnhancedWithAuthHttpService } from '../../common/services/http-auth.service';
import { IExample, IStatistic } from '../types';

export class ExampleService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public async getExamples() {
    const res = await this.httpService.get<IExample>('example');
    console.log('getExamples: ', res);
    return res;
  }

  public async getStatistic() {
    const res = await this.httpService.get<IStatistic>('statistic');
    console.log('getStatistic: ', res);
    return res;
  }
  //   public addExample(id: string) {
  //     return this.httpService.post<IExample>('order');
  //   }
  //   public fetchCompletedOrders() {
  //     return this.httpService.get<IOrdersResponse>('order?status=completed');
  //   }
  //   public fetchMyOrders() {
  //     return this.httpService.get<IOrdersResponse>('order?myOrders=true&status=accepted');
  //   }
}

const factory = new HttpFactoryService();
export const exampleService = new ExampleService(
  factory.createAuthHttpService(),
);
