import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { CountryEntity } from './country.entity';
import { CreateCountryDTO } from './dto/create-country.dto';
import { CountryClass } from './classes/country.class';

export type Country = any;

@Injectable()
export class CountriesService {
    CountryEntity: any;

    private readonly countries: Country[];
    create(country: CreateCountryDTO): CountryClass {
        this.countries.push(country);
        return country;
    }

    constructor(
        @InjectRepository(CountryEntity)
        private countriesRepository: Repository<CountryEntity>,
        private connection: Connection,
    ) { }

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

    findAll(): Promise<CountryEntity[]> {
        return this.countriesRepository.find();
    }

    findOne(id: string): Promise<CountryEntity> {
        return this.countriesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.countriesRepository.delete(id);
    }
    async createMany(countries: CountryEntity[]) {
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