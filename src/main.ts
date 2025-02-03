import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  const options = new DocumentBuilder()
    .setTitle('Toy Project API Docs')
    .setDescription('민붕이를 위한 API 설명서')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
