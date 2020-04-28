import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { ResidencesController } from './residences/residences.controller';
import { ResidencesService } from './residences/residences.service';
import { TimeItemsController } from './time_items/time_items.controller';
import { TimeItemsService } from './time_items/time_items.service';
import { MediaController } from './media/media.controller';
import { MediaService } from './media/media.service';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { StatesController } from './states/states.controller';
import { StatesService } from './states/states.service';
import { CitiesController } from './cities/cities.controller';
import { CitiesService } from './cities/cities.service';
import { CitiesModule } from './cities/cities.module';
import { MatchesController } from './matches/matches.controller';
import { MatchesService } from './matches/matches.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleService } from './schedule/schedule.service';
import { MeetingsController } from './meetings/meetings.controller';
import { MeetingsService } from './meetings/meetings.service';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { ResidencesModule } from './residences/residences.module';
import { TimeItemsModule } from './time_items/time_items.module';
import { MeetingsModule } from './meetings/meetings.module';
import { ScheduleModule } from './schedule/schedule.module';
import { OrderModule } from './orders/orders.module';
import { MatchesModule } from './matches/matches.module';
import { StatesModule } from './states/states.module';
import { CountriesModule } from './countries/countries.module';
import { MediaModule } from './media/media.module';


@Module({
  imports: [CitiesModule, UsersModule, EmployeesModule, ResidencesModule, TimeItemsModule, MediaModule, CountriesModule, StatesModule, MatchesModule, OrderModule, ScheduleModule, MeetingsModule],
  controllers: [AppController, UsersController, EmployeesController, ResidencesController, TimeItemsController, MediaController, CountriesController, StatesController, CitiesController, MatchesController, OrdersController, ScheduleController, MeetingsController],
  providers: [AppService, UsersService, EmployeesService, ResidencesService, TimeItemsService, MediaService, CountriesService, StatesService, CitiesService, MatchesService, OrdersService, ScheduleService, MeetingsService],
})
export class AppModule {}
