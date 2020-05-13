import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { CityEntity } from './city.entity';
import { CitySubscriber } from './city.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  exports: [TypeOrmModule],
  controllers: [CitiesController],
  providers: [CitiesService, CitySubscriber]
})
export class CitiesModule {}