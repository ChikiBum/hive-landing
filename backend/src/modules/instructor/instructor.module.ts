import { Module } from '@nestjs/common';
import { InstructorAuthController } from './controllers/instructor-auth.controller';
import { InstructorAuthService } from './services/instructor-auth.service';

@Module({
  providers: [InstructorAuthService],
  controllers: [InstructorAuthController],
})
export class InstructorModule {}
