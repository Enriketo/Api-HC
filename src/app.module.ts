import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { ResidencesController } from './residences/residences.controller';
import { ResidencesService } from './residences/residences.service';
import { TimeItemsController } from './time-items/time-items.controller';
import { TimeItemsService } from './time-items/time-items.service';
import { MediaController } from './media/media.controller';
import { MediaService } from './media/media.service';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { StatesController } from './states/states.controller';
import { StatesService } from './states/states.service';
import { CitiesController } from './cities/cities.controller';
import { CitiesService } from './cities/cities.service';
import { MatchesController } from './matches/matches.controller';
import { MatchesService } from './matches/matches.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleService } from './schedule/schedule.service';
import { MeetingsController } from './meetings/meetings.controller';
import { MeetingsService } from './meetings/meetings.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, EmployeesController, ResidencesController, TimeItemsController, MediaController, CountriesController, StatesController, CitiesController, MatchesController, OrderController, ScheduleController, MeetingsController],
  providers: [AppService, UsersService, EmployeesService, ResidencesService, TimeItemsService, MediaService, CountriesService, StatesService, CitiesService, MatchesService, OrderService, ScheduleService, MeetingsService],
})
export class AppModule {}
