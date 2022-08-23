import { HttpFactoryService } from '../../common/services/http-factory.service';
import { EnhancedWithAuthHttpService } from '../../common/services/http-auth.service';
import { IStatistic } from '../types';

export class HeaderStatisticService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public async getStatistic() {
    const res = await this.httpService.get<IStatistic>('statistic');
    console.log('getStatistic: ', res);
    return res;
  }
}

const factory = new HttpFactoryService();
export const headerStatisticService = new HeaderStatisticService(
  factory.createAuthHttpService(),
);
