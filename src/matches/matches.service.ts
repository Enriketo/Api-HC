import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatchEntity } from './match.entity';
import { MATCHES } from '../../mocks/matches.mock';

@Injectable()
export class MatchesService {
    matches = MATCHES;

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
    constructor(
        @InjectRepository(MatchEntity)
        private matchesRepository: Repository<MatchEntity>,
    ) { }

    findAll(): Promise<MatchEntity[]> {
        return this.matchesRepository.find();
    }

    findOne(id: string): Promise<MatchEntity> {
        return this.matchesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.matchesRepository.delete(id);
    }
}
