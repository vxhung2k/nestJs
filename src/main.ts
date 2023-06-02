import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  await app.listen(3000);
  logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');
  //logger.log(`Database uri ${databaseUri}`, 'NestApplication');
}
bootstrap();
