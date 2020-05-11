import { Module } from '@nestjs/common';
import { MatchesModule } from './matches.module';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';

@Module({
  imports: [MatchesModule],
  providers: [MatchesService],
  controllers: [MatchesController]
})
export class MatchHttpModule {}
