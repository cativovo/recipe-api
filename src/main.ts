import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvironmentVariables } from './utils/env-validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService =
    app.get<ConfigService<EnvironmentVariables>>(ConfigService);
  const port = configService.get('PORT', 4000);

  await app.listen(port);
}
bootstrap();
