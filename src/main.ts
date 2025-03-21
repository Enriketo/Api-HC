import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

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
  
  //CORS 
  const whitelist = [
    '*',
    'https://juansebastiandiazv.github.io',
    'https://www.hotcompanyapp.company',
    'https://hotcompanyapp.company',
    'https://juansebastiandiazv.github.io/Hot_workers_Hotels',
  ];

 const corsOptions = { 
  origin: function (origin, callback) { 
    if (whitelist.indexOf(origin) !== -1 || !origin) { 
      callback(null, true); 
    } else { 
      callback(new Error("Not allowed by CORS")); 
    } 
  }, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"], 
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], 
  credentials: true, 
};
  
  app.use(cors(corsOptions));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();