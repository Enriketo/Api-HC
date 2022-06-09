import { Module } from "@nestjs/common";
import { MatchesService } from "../services/matches.service";
import { MatchesController } from "../controllers/matches.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Matches } from "../entities/match.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Matches])],
  providers: [MatchesService],
  controllers: [MatchesController]
})
export class MatchesModule {}
