import { Module } from "@nestjs/common";
import { ResidencesService } from "../services/residences.service";
import { ResidencesController } from "../controllers/residences.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Residences } from "../entities/residence.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Residences])],
  providers: [ResidencesService],
  controllers: [ResidencesController]
})
export class ResidencesModule {}
