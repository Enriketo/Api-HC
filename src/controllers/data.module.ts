import { Module } from "@nestjs/common";
import { DataService } from "./data.service";
import { CitiesModule } from "../cities/cities.module";
import { CountriesModule } from "../countries/countries.module";
import { MatchesModule } from "../matches/matches.module";
import { MeetingsModule } from "../meetings/meetings.module";
import { OrdersModule } from "../orders/orders.module";
import { ResidencesModule } from "../residences/residences.module";
import { ScheduleModule } from "../schedule/schedule.module";
import { StatesModule } from "../states/states.module";
import { TimeItemsModule } from "../time_items/time_items.module";

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
  providers: [
    DataService,
  ],

  exports: [DataService]
})
export class DataModule { }












