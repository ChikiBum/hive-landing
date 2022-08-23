import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TrimMiddleware } from './middlewares/trim.middleware';
import { CommonModule } from './modules/common/common.module';
import { InstructorModule } from './modules/instructor/instructor.module';
import { StudentModule } from './modules/student/student.module';

@Module({
  imports: [CommonModule, InstructorModule, StudentModule],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(...[TrimMiddleware]).forRoutes('/');
  }
}
