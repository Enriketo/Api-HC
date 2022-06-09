import { Module } from "@nestjs/common";
import { CountriesModule } from "./countries.module";
import { CountriesService } from "../services/countries.service";
import { CountriesController } from "../controllers/countries.controller";

@Module({
  imports: [CountriesModule],
  providers: [CountriesService],
  controllers: [CountriesController]
})
export class CountryHttpModule {}
