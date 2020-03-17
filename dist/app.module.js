"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const employees_controller_1 = require("./employees/employees.controller");
const employees_service_1 = require("./employees/employees.service");
const residences_controller_1 = require("./residences/residences.controller");
const residences_service_1 = require("./residences/residences.service");
const time_items_controller_1 = require("./time-items/time-items.controller");
const time_items_service_1 = require("./time-items/time-items.service");
const media_controller_1 = require("./media/media.controller");
const media_service_1 = require("./media/media.service");
const countries_controller_1 = require("./countries/countries.controller");
const countries_service_1 = require("./countries/countries.service");
const states_controller_1 = require("./states/states.controller");
const states_service_1 = require("./states/states.service");
const cities_controller_1 = require("./cities/cities.controller");
const cities_service_1 = require("./cities/cities.service");
const matches_controller_1 = require("./matches/matches.controller");
const matches_service_1 = require("./matches/matches.service");
const order_controller_1 = require("./order/order.controller");
const order_service_1 = require("./order/order.service");
const schedule_controller_1 = require("./schedule/schedule.controller");
const schedule_service_1 = require("./schedule/schedule.service");
const meetings_controller_1 = require("./meetings/meetings.controller");
const meetings_service_1 = require("./meetings/meetings.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, employees_controller_1.EmployeesController, residences_controller_1.ResidencesController, time_items_controller_1.TimeItemsController, media_controller_1.MediaController, countries_controller_1.CountriesController, states_controller_1.StatesController, cities_controller_1.CitiesController, matches_controller_1.MatchesController, order_controller_1.OrderController, schedule_controller_1.ScheduleController, meetings_controller_1.MeetingsController],
        providers: [app_service_1.AppService, users_service_1.UsersService, employees_service_1.EmployeesService, residences_service_1.ResidencesService, time_items_service_1.TimeItemsService, media_service_1.MediaService, countries_service_1.CountriesService, states_service_1.StatesService, cities_service_1.CitiesService, matches_service_1.MatchesService, order_service_1.OrderService, schedule_service_1.ScheduleService, meetings_service_1.MeetingsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map