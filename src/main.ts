import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const options = new DocumentBuilder()
    .setTitle('Toy Project API Docs')
    .setDescription('민붕이를 위한 API 설명서')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = Number(configService.get('PORT')) || 3000;
  const host = String(configService.get('HOST') || '127.0.0.1');

  await app.listen(port, host);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
