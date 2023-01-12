import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { CitiesModule } from "./modules/cities.module";
import { UsersModule } from "./modules/users.module";
import { EmployeesModule } from "./modules/employees.module";
import { ResidencesModule } from "./modules/residences.module";
import { TimeItemsModule } from "./modules/time_items.module";
import { MeetingsModule } from "./modules/meetings.module";
import { ScheduleModule } from "./modules/schedule.module";
import { OrdersModule } from "./modules/orders.module";
import { MatchesModule } from "./modules/matches.module";
import { StatesModule } from "./modules/states.module";
import { CountriesModule } from "./modules/countries.module";
import { MediaModule } from "./modules/media.module";
import { AuthModule } from "./auth/auth.module";
import { ImageUploadModule } from "./providers/images/imageupload.module";
import fs = require("fs");

//TODO Dont forget setup typeorm config

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "database-1.c0z89plrkuvl.us-east-1.rds.amazonaws.com",
      port: 3306,
      username: "admin",
      password: "Gd5g8ZQB9Ooy6KsKEhAQ",
      database: "hc-db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CitiesModule,
    UsersModule,
    EmployeesModule,
    ResidencesModule,
    TimeItemsModule,
    MediaModule,
    CountriesModule,
    StatesModule,
    MatchesModule,
    OrdersModule,
    ScheduleModule,
    MeetingsModule,
    AuthModule,
    ImageUploadModule,
//    DataModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule { }
