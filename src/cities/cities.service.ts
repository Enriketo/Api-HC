import { Injectable, HttpException } from '@nestjs/common';
import { CITIES } from '../../mocks/cities.mock';

@Injectable()
export class CitiesService {
    cities = CITIES;

    getCities(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.cities);
        });
    }
    getCity(cityID): Promise<any> {
        let id = Number(cityID);
        return new Promise(resolve => {
            const city = this.cities.find(city => city.id === id);
            if (!city) {
                throw new HttpException('City does not exist!', 404);
            }
            resolve(city);
        });
    }
    addCity(city): Promise<any> {
        return new Promise(resolve => {
            this.cities.push(city);
            resolve(this.cities);
        });
    }
    deleteCity(cityID): Promise<any> {
        let id = Number(cityID);
        return new Promise(resolve => {
            let index = this.cities.findIndex(city => city.id === id);
            if (index === -1) {
                throw new HttpException('City does not exist!', 404);
            }
            this.cities.splice(1, index);
            resolve(this.cities);
        });
    }
}