import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import axios, { AxiosInstance } from 'axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`],
    }),
    // 기본 HTTP 모듈 (타임아웃만 설정)
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useFactory: (config: ConfigService) => {
        const instance: AxiosInstance = axios.create({
          baseURL: config.get<string>('AUTH_URL'),
          timeout: 5000,
        });
        return new HttpService(instance);
      },
      inject: [ConfigService],
    },
    {
      provide: 'EVENT_SERVICE',
      useFactory: (config: ConfigService) => {
        const instance: AxiosInstance = axios.create({
          baseURL: config.get<string>('EVENT_URL'),
          timeout: 5000,
        });
        return new HttpService(instance);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['AUTH_SERVICE', 'EVENT_SERVICE'],
})
export class AppModule {}
