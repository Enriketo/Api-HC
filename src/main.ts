import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("HC API")
    .setDescription("Hot Company")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);
  
  // Configuración de CORS
  const whitelist = [
    'https://juansebastiandiazv.github.io',
    'https://www.hotcompanyapp.company',
    'https://hotcompanyapp.company',
    'https://juansebastiandiazv.github.io/Hot_workers_Hotels',
    'https://juansebastiandiazv.github.io/Hot_workers_Hotels/',
    'https://juansebastiandiazv.github.io/Hot_workers_Hotels/register-general'
  ];

  app.enableCors({
    origin: function (origin, callback) {
      // Verificar si el origen está en la whitelist o es una subruta de los dominios permitidos
      const isWhitelisted = whitelist.some(domain => 
        origin === domain || 
        origin.startsWith(domain + '/')
      );
      
      if (isWhitelisted || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
