import { Injectable } from "@nestjs/common";
import { CitiesService } from "./cities.service";
import { CountriesService } from "../services/countries.service";
import { MatchesService } from "../services/matches.service";
import { MeetingsService } from "../services/meetings.service";
import { OrdersService } from "../services/orders.service";
import { ResidencesService } from "./residences.service";
import { ScheduleService } from "../services/schedule.service";
import { StatesService } from "../services/states.service";
import { TimeItemsService } from "./time_items.service";


@Injectable()
export class DataService {
    constructor(
        private readonly citiesService: CitiesService,
        private readonly countriesService: CountriesService,
        private readonly matchesService: MatchesService,
        private readonly meetingsService: MeetingsService,
        private readonly ordersService: OrdersService,
        private readonly residencesService: ResidencesService,
        private readonly scheduleService: ScheduleService,
        private readonly statesService: StatesService,
        private readonly timeItemsService: TimeItemsService,
    ) {}

    async getData(result) {

        let city = await this.citiesService.findOneById(result.cityId);
        let country = await this.countriesService.findOneById(result.countryId);
        let match = await this.matchesService.findOneById(result.matchId);
        let meeting = await this.meetingsService.findOneById(result.meetingId);
        let order = await this.ordersService.findOneById(result.orderId);
        let residence = await this.residencesService.findOneById(result.residenceId);
        let schedule = await this.scheduleService.findOneById(result.scheduleId);
        let state = await this.statesService.findOneById(result.stateId);
        let timeItem = await this.timeItemsService.findOneById(result.timeItemId);

        const data = [city, country, match, meeting, order, residence, schedule, state, timeItem ];
        return data;
    };
}


