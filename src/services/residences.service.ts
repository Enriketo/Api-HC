import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Residences } from "../entities/residence.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';

@Injectable()
export class ResidencesService {
  constructor(
    @InjectRepository(Residences)
    private residenceRepository: Repository<Residences>
  ) {}

  async create(residence): Promise<Residences> {
    console.log(residence);
    return await this.residenceRepository.save(residence);
  }

  async findAll(): Promise<Residences[]> {
    return await this.residenceRepository.find();
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Residences>> {
    return paginate<Residences>(this.residenceRepository, options);
  }
  

  async findOneById(residenceId): Promise<Residences> {
    return await this.residenceRepository.findOne(residenceId);
  }

  async editResidence(residenceId, residence): Promise<UpdateResult> {
    return await this.residenceRepository.update(residenceId, residence);
  }

  async deleteResidence(residenceId): Promise<DeleteResult> {
    return await this.residenceRepository.delete(residenceId);
  }
}
