import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matches } from './match.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matches])],
  providers: [MatchesService],
  controllers: [MatchesController],
})
export class MatchesModule {}
