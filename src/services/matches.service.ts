import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Matches } from "../entities/match.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Matches)
    private matchRepository: Repository<Matches>
  ) {}

  async create(match): Promise<Matches> {
    console.log(match);
    return await this.matchRepository.save(match);
  }

  async findAll(): Promise<Matches[]> {
    return await this.matchRepository.find();
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Matches>> {
    return paginate<Matches>(this.matchRepository, options);
  }

  async findOneById(matchId): Promise<Matches> {
    return await this.matchRepository.findOne(matchId);
  }

  async editMatch(matchId, match): Promise<UpdateResult> {
    return await this.matchRepository.update(matchId, match);
  }

  async deleteMatch(matchId): Promise<DeleteResult> {
    return await this.matchRepository.delete(matchId);
  }
}
