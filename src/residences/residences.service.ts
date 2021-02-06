import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Residences } from "./residence.entity";
import { UpdateResult, DeleteResult } from "typeorm";

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
