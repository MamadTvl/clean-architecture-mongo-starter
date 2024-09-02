import { JobsModule } from '@/infrastructure/job/job.module';
import { Module, forwardRef } from '@nestjs/common';

@Module({
  imports: [forwardRef(() => JobsModule)],
  providers: [],
  exports: [],
})
export class BullQueueModule {}
