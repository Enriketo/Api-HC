import { Module } from '@nestjs/common';
import { StatesModule } from './states.module';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';

@Module({
  imports: [StatesModule],
  providers: [StatesService],
  controllers: [StatesController]
})
export class StateHttpModule {}
