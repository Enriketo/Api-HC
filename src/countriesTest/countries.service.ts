import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Countries } from './country.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CountriesService {

  constructor(
    @InjectRepository(Countries)
    private countryRepository: Repository<Countries>,
  ) {}

  async create(country): Promise<Countries> {
    console.log(country);
    return await this.countryRepository.save(country);
  }

  async findAll(): Promise<Countries[]> {
    return await this.countryRepository.find();
  }

  async findOneById(countryId): Promise<Countries> {
    return await this.countryRepository.findOne(countryId);
  }

  async editCountry(countryId, country): Promise<UpdateResult> {
    return await this.countryRepository.update(countryId, country);
  }

  async deleteCountry(countryId): Promise<DeleteResult> {
    return await this.countryRepository.delete(countryId);
  }
}
