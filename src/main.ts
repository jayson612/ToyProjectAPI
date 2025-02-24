import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

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

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
