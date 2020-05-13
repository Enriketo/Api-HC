import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { ResidenceEntity } from './residence.entity';
import { RESIDENCES } from '../../mocks/residences.mock';

@Injectable()
export class ResidencesService {
    residences = RESIDENCES;
    constructor(
        @InjectRepository(ResidenceEntity)
        private residencesRepository: Repository<ResidenceEntity>,
        private connection: Connection,
    ) {}

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
    findAll(): Promise<ResidenceEntity[]> {
        return this.residencesRepository.find();
    }

    findOne(id: string): Promise<ResidenceEntity> {
        return this.residencesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.residencesRepository.delete(id);
    }
    async createMany(residences: ResidenceEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(residences[0]);
          await queryRunner.manager.save(residences[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(residences[0]);
            await manager.save(residences[1]);
          });
      }
}
