import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CitiesModule } from './cities/cities.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { ResidencesModule } from './residences/residences.module';
import { TimeItemsModule } from './time_items/time_items.module';
import { MeetingsModule } from './meetings/meetings.module';
import { ScheduleModule } from './schedule/schedule.module';
import { OrdersModule } from './orders/orders.module';
import { MatchesModule } from './matches/matches.module';
import { StatesModule } from './states/states.module';
import { CountriesModule } from './countries/countries.module';
import { MediaModule } from './media/media.module';
import { AuthModule } from './auth/auth.module'
import { ImageUploadModule } from './providers/images/imageupload.module'
import fs = require('fs');

//TODO Dont forget setup typeorm config

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'apihc.csvyhe8o5c5o.us-east-2.rds.amazonaws.com',
    //host: 'apihc.ccwsw5pi0yw8.us-east-2.rds.amazonaws.com',
    port: 3306,
    username: 'enrique',
    password: 'mTcOpCP8gFBJSyUmhCYG',
    //password: '12345678',
    database: 'apihc',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
  },
  ), CitiesModule, UsersModule, EmployeesModule, ResidencesModule, TimeItemsModule, MediaModule, CountriesModule, StatesModule, MatchesModule, 
     OrdersModule, ScheduleModule, MeetingsModule, AuthModule, ImageUploadModule],
  providers: [AppService],controllers:[AppController],
})

export class AppModule { }
