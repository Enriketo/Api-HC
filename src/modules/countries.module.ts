import { Module } from "@nestjs/common";
import { CountriesService } from "../services/countries.service";
import { CountriesController } from "../controllers/countries.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Countries } from "../entities/country.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Countries])],
  providers: [CountriesService],
  controllers: [CountriesController]
})
export class CountriesModule {}
