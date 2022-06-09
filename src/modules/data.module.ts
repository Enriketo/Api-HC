import { Module } from "@nestjs/common";
//import { DataService } from "./data.service";
import { CitiesModule } from "./cities.module";
import { CountriesModule } from "./countries.module";
import { MatchesModule } from "./matches.module";
import { MeetingsModule } from "./meetings.module";
import { OrdersModule } from "./orders.module";
import { ResidencesModule } from "./residences.module";
import { ScheduleModule } from "./schedule.module";
import { StatesModule } from "./states.module";
import { TimeItemsModule } from "./time_items.module";

@Module({
  imports: [
    CitiesModule,
    CountriesModule,
    MatchesModule,
    MeetingsModule,
    OrdersModule,
    ResidencesModule,
    ScheduleModule,
    StatesModule,
    TimeItemsModule,
  ],
  //providers: [
  //  DataService,
  //],

  //exports: [DataService]
})
export class DataModule { }












