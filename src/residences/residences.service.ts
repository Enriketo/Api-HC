import { Injectable, HttpException } from '@nestjs/common';
import { RESIDENCES } from '../../mocks/residences.mock';

@Injectable()
export class ResidencesService {
    residences = RESIDENCES;

    getResidences(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.residences);
        });
    }
    getResidence(residenceID): Promise<any> {
        let id = Number(residenceID);
        return new Promise(resolve => {
            const residence = this.residences.find(residence => residence.id === id);
            if (!residence) {
                throw new HttpException('Residence does not exist!', 404);
            }
            resolve(residence);
        });
    }
    addResidence(residence): Promise<any> {
        return new Promise(resolve => {
            this.residences.push(residence);
            resolve(this.residences);
        });
    }
    deleteResidence(residenceID): Promise<any> {
        let id = Number(residenceID);
        return new Promise(resolve => {
            let index = this.residences.findIndex(residence => residence.id === id);
            if (index === -1) {
                throw new HttpException('Residence does not exist!', 404);
            }
            this.residences.splice(1, index);
            resolve(this.residences);
        });
    }
}
