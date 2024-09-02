import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import {
  bullRedisConnection,
  defaultJobOptions,
} from '../config/bull/bull.config';

@Module({
  imports: [
    BullModule.forRoot({
      connection: bullRedisConnection,
      defaultJobOptions: defaultJobOptions,
    }),
  ],
  providers: [],
})
export class JobsModule {}
