import { Module } from '@nestjs/common';
import { ExampleService } from './services/example.service';
import { ExampleController } from './controllers/example.controller';
@Module({
  providers: [ExampleService],
  controllers: [ExampleController],
})
export class ExampleModule {}
