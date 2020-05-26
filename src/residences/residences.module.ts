import { Module } from '@nestjs/common';
import { ResidencesService } from './residences.service';
import { ResidencesController } from './residences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Residences } from './residence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Residences])],
  providers: [ResidencesService],
  controllers: [ResidencesController],
})
export class ResidencesModule {}
