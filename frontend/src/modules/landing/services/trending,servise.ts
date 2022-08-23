import { HttpFactoryService } from '../../common/services/http-factory.service';
import { EnhancedWithAuthHttpService } from '../../common/services/http-auth.service';
import { ITrending } from '../types';

export class TrendingsStatisticService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public async getTrending() {
    const res = await this.httpService.get<ITrending>('trending');
    console.log('getTrending: ', res);
    return res;
  }
}

const factory = new HttpFactoryService();
export const trendingsStatisticService = new TrendingsStatisticService(
  factory.createAuthHttpService(),
);
