import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // http error를 전역변수로 등록
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(8000);
}

bootstrap();
