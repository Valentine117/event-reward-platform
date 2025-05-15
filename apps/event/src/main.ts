import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('EVENT_PORT');
  await app.listen(port ?? 3002);
  console.log(`Event service running on http://localhost:${port}`);
}
bootstrap();
