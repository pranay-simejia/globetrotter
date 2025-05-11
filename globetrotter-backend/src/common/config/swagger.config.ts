import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

const setupSwagger = (app: INestApplication) => {
  const isDev = process.env.NODE_ENV === 'development';
  const isMorning = new Date().getHours() >= 8 && new Date().getHours() < 20;
  const config = new DocumentBuilder()
    .setTitle('Api docs')
    .setDescription('The API description')
    .setVersion('0.1')
    .addServer(isDev ? 'http://localhost:8000' : 'https://5j1mq6lhb4.execute-api.us-east-1.amazonaws.com/prod')
    .addBearerAuth()
    .build();
  const theme = new SwaggerTheme();
  const options = {
    explorer: true,
    customCss: theme.getBuffer(
      SwaggerThemeNameEnum[isMorning ? 'CLASSIC' : 'DARK'],
    ),
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, options);
};

export { setupSwagger };
