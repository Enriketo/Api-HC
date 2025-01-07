import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from '@nestjs/common';
import { cors } from "cors";

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
    "https://www.hotcompanyapp.company",
    "https://hotcompanyapp.company",
  ];

  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };
  
  app.use(cors(corsOptions));

//  app.enableCors({
//    origin: ['http://localhost:8000', 'http://3.137.39.122:8000'], // Agrega las URLs que necesitas
//    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos que quieres permitir
//    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
//  });
  
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
