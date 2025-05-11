import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import { DestinationsModule } from './destinations/destinations.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { UsersModule } from './users/users.module';

import config from './common/config/env/config';

import dbConfig from './db/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config, dbConfig],
      envFilePath: ['./.env'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
        type: 'postgres',
        host: configService.get<string>('database.host', 'localhost'),
        port: parseInt(configService.get<string>('database.port', '5432'), 10),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        autoLoadEntities: true,
        synchronize: true, // ⛔ Don't use in production
        ssl: {
          rejectUnauthorized: true,
          requestCert: true,
          ca: readFileSync('ca.pem').toString(),
        },
      }),
    }),
    CommonModule,
    DestinationsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
