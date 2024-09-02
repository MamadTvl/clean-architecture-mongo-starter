import { Config } from '@/domain/config/config.interface';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Config>) => {
        const conf = configService.get('db', { infer: true });
        return {
          uri: `mongodb://${conf.host}:${conf.port}/${conf.name}`,
          auth: {
            username: conf.user,
            password: conf.password,
          },
          authSource: conf.authSource,
        };
      },
    }),
  ],
})
export class MongoModule {}
