import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { CityEntity } from './city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  exports: [TypeOrmModule],
  controllers: [CitiesController],
  providers: [CitiesService]
})
export class CitiesModule {}