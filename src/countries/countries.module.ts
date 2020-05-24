import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { Countries } from './country.entity';
import { CountrySubscriber } from './country.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([Countries])],
    exports: [TypeOrmModule],
    controllers: [Countries],
    providers: [CountriesService, CountrySubscriber]
})
export class CountriesModule {}
