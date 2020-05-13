import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
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
import fs = require('fs');

//TODO Dont forget setup typeorm config

@Module({
  imports: [TypeOrmModule.forRoot( {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'enrique',
        password: '1234',
        database: 'apihc',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      },
  ), CitiesModule, UsersModule, EmployeesModule, ResidencesModule, TimeItemsModule, MediaModule, CountriesModule, StatesModule, MatchesModule, OrdersModule, ScheduleModule, MeetingsModule],
  providers: [AppService],
})

export class AppModule {}

//import { Connection } from 'typeorm';
//import { AppController } from './app.controller';
//import { UsersController } from './users/users.controller';
//import { UsersService } from './users/users.service';
//import { EmployeesController } from './employees/employees.controller';
//import { EmployeesService } from './employees/employees.service';
//import { ResidencesController } from './residences/residences.controller';
//import { ResidencesService } from './residences/residences.service';
//import { TimeItemsController } from './time_items/time_items.controller';
//import { TimeItemsService } from './time_items/time_items.service';
//import { MediaController } from './media/media.controller';
//import { MediaService } from './media/media.service';
//import { CountriesController } from './countries/countries.controller';
//import { CountriesService } from './countries/countries.service';
//import { StatesController } from './states/states.controller';
//import { StatesService } from './states/states.service';
//import { CitiesController } from './cities/cities.controller';
//import { CitiesService } from './cities/cities.service';
//import { MatchesController } from './matches/matches.controller';
//import { MatchesService } from './matches/matches.service';
//import { OrdersController } from './orders/orders.controller';
//import { OrdersService } from './orders/orders.service';
//import { ScheduleController } from './schedule/schedule.controller';
//import { ScheduleService } from './schedule/schedule.service';
//import { MeetingsController } from './meetings/meetings.controller';
//import { MeetingsService } from './meetings/meetings.service';