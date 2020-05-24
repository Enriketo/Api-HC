import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, UpdateResult, DeleteResult } from 'typeorm';
import { Countries } from './country.entity';
import { CreateCountryDTO } from './dto/create-country.dto';

export type Country = any;

@Injectable()
export class CountriesService {
    CountryEntity: any;

    constructor(
        @InjectRepository(Countries)
        private countryRepository: Repository<Countries>, //TODO CHECK NAMING IN REPOSITORY VAR IS SINGULAR
        private connection: Connection,
    ) { }

    private readonly countries: Country[]; //TODO REMOVE THIS VARIABLE

    async create(country): Promise<Countries> {
        return await this.countryRepository.save(country); //TODO CHECK IN ALL CREATE MODELS (WHY USE OBJ COUNTRY?) AND DATA SAVE WITH REPOSITORY
    }

    getCountries(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.CountryEntity);
        });
    }
    getCountry(countryID): Promise<any> {
        let id = Number(countryID);
        return new Promise(resolve => {
            const country = this.CountryEntity.find(country => country.id === id);
            if (!country) {
                throw new HttpException('Country does not exist!', 404);
            }
            resolve(country);
        });
    }
    addCountry(country): Promise<any> {
        return new Promise(resolve => {
            this.CountryEntity.push(country);
            resolve(this.CountryEntity);
        });
    }
    deleteCountry(countryID): Promise<any> {
        let id = Number(countryID);
        return new Promise(resolve => {
            let index = this.CountryEntity.findIndex(country => country.id === id);
            if (index === -1) {
                throw new HttpException('Country does not exist!', 404);
            }
            this.CountryEntity.splice(1, index);
            resolve(this.CountryEntity);
        });
    }

    findAll(): Promise<Countries[]> {
        return this.countryRepository.find();
    }

    findOne(id: string): Promise<Countries> {
        return this.countryRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.countryRepository.delete(id);
    }

    async createMany(countries: Countries[]) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(countries[0]);
          await queryRunner.manager.save(countries[1]);

          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(countries[0]);
            await manager.save(countries[1]);
          });
      }
}
