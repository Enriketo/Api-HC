import { Module } from '@nestjs/common';
import { CountriesModule } from './countries.module';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';

@Module({
  imports: [CountriesModule],
  providers: [CountriesService],
  controllers: [CountriesController]
})
export class CountryHttpModule {}
