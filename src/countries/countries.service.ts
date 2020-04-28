import { Injectable, HttpException } from '@nestjs/common';
import { COUNTRIES } from '../../mocks/countries.mock';

@Injectable()
export class CountriesService {
    countries = COUNTRIES;

    getCountries(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.countries);
        });
    }
    getCountry(countryID): Promise<any> {
        let id = Number(countryID);
        return new Promise(resolve => {
            const country = this.countries.find(country => country.id === id);
            if (!country) {
                throw new HttpException('Country does not exist!', 404);
            }
            resolve(country);
        });
    }
    addCountry(country): Promise<any> {
        return new Promise(resolve => {
            this.countries.push(country);
            resolve(this.countries);
        });
    }
    deleteCountry(countryID): Promise<any> {
        let id = Number(countryID);
        return new Promise(resolve => {
            let index = this.countries.findIndex(country => country.id === id);
            if (index === -1) {
                throw new HttpException('Country does not exist!', 404);
            }
            this.countries.splice(1, index);
            resolve(this.countries);
        });
    }
}