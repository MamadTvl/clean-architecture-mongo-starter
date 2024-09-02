import { MongoModule } from '@/infrastructure/config/mongo/mongo.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from '../entities/movie.entity';
import { SeedService } from './seed.service';

@Module({
  imports: [],
  providers: [SeedService],
})
export class SeedModule {}
