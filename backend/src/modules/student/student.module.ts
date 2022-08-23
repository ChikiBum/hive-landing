import { Module } from '@nestjs/common';
import { StudentAuthService } from './services/student-auth.service';
import { StudentAuthController } from './controllers/student-auth.controller';

@Module({
  providers: [StudentAuthService],
  controllers: [StudentAuthController],
})
export class StudentModule {}
