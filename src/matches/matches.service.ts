import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { MatchEntity } from './match.entity';
import { MATCHES } from '../../mocks/matches.mock';

@Injectable()
export class MatchesService {
    matches = MATCHES;
    constructor(
        @InjectRepository(MatchEntity)
        private matchesRepository: Repository<MatchEntity>,
        private connection: Connection,
    ) { }

    getMatches(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.matches);
        });
    }
    getMatch(matchID): Promise<any> {
        let id = Number(matchID);
        return new Promise(resolve => {
            const match = this.matches.find(match => match.id === id);
            if (!match) {
                throw new HttpException('Match does not exist!', 404);
            }
            resolve(match);
        });
    }
    addMatch(match): Promise<any> {
        return new Promise(resolve => {
            this.matches.push(match);
            resolve(this.matches);
        });
    }
    deleteMatch(matchID): Promise<any> {
        let id = Number(matchID);
        return new Promise(resolve => {
            let index = this.matches.findIndex(match => match.id === id);
            if (index === -1) {
                throw new HttpException('Match does not exist!', 404);
            }
            this.matches.splice(1, index);
            resolve(this.matches);
        });
    }

    findAll(): Promise<MatchEntity[]> {
        return this.matchesRepository.find();
    }

    findOne(id: string): Promise<MatchEntity> {
        return this.matchesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.matchesRepository.delete(id);
    }
    async createMany(matches: MatchEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(matches[0]);
          await queryRunner.manager.save(matches[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(matches[0]);
            await manager.save(matches[1]);
          });
      }
}
