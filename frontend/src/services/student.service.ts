import { EnhancedWithAuthHttpService } from '../modules/common/services/http-auth.service';
import { HttpFactoryService } from '../modules/common/services/http-factory.service';
import { HttpService } from '../modules/common/services/http.service';
import { IStudentAuth } from './../types/student.types';

class StudentService {
  constructor(
    private httpService: HttpService,
    private authHttpService: EnhancedWithAuthHttpService,
  ) {}

  async studentAuth(
    data: IStudentAuth,
  ): Promise<{ token: string } | void | undefined> {
    return this.httpService.post('student-auth/wallet', data);
  }
}

const factory = new HttpFactoryService();
export const studentService = new StudentService(
  factory.createHttpService(),
  factory.createAuthHttpService(),
);
