import { Module } from "@nestjs/common";
import { CitiesService } from "../services/cities.service";
import { CitiesController } from "../controllers/cities.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cities } from "../entities/city.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Cities])],
  providers: [CitiesService],
  controllers: [CitiesController],
  exports: [CitiesService],
})

export class CitiesModule {}
