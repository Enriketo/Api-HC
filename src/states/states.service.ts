import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { States } from "./state.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(States)
    private stateRepository: Repository<States>
  ) {}

  async create(state): Promise<States> {
    console.log(state);
    return await this.stateRepository.save(state);
  }

  async findAll(): Promise<States[]> {
    return await this.stateRepository.find();
  }
  
  async paginate(options: IPaginationOptions): Promise<Pagination<States>> {
    return paginate<States>(this.stateRepository, options);
  }

  async findOneById(stateId): Promise<States> {
    return await this.stateRepository.findOne(stateId);
  }

  async editState(stateId, state): Promise<UpdateResult> {
    return await this.stateRepository.update(stateId, state);
  }

  async deleteState(stateId): Promise<DeleteResult> {
    return await this.stateRepository.delete(stateId);
  }
}
