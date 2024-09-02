import { Module } from '@nestjs/common';
import { MongoModule } from '../config/mongo/mongo.module';

@Module({
  imports: [MongoModule],
  providers: [],
  exports: [],
})
export class RepositoriesModule {}
