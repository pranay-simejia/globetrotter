"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_themes_1 = require("swagger-themes");
const setupSwagger = (app) => {
    const isDev = process.env.NODE_ENV === 'development';
    const isMorning = new Date().getHours() >= 8 && new Date().getHours() < 20;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Api docs')
        .setDescription('The API description')
        .setVersion('0.1')
        .addServer(isDev ? 'http://localhost:8000' : 'https://5j1mq6lhb4.execute-api.us-east-1.amazonaws.com/prod')
        .addBearerAuth()
        .build();
    const theme = new swagger_themes_1.SwaggerTheme();
    const options = {
        explorer: true,
        customCss: theme.getBuffer(swagger_themes_1.SwaggerThemeNameEnum[isMorning ? 'CLASSIC' : 'DARK']),
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document, options);
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.config.js.map