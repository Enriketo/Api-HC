import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cities } from "./city.entity";
import { UpdateResult, DeleteResult } from "typeorm";

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(Cities)
    private cityRepository: Repository<Cities>
  ) {}

  async create(city): Promise<Cities> {
    console.log(city);
    return await this.cityRepository.save(city);
  }

  async findAll(): Promise<Cities[]> {
    return await this.cityRepository.find();
  }

  async findOneById(cityId): Promise<Cities> {
    return await this.cityRepository.findOne(cityId);
  }

  async editCity(cityId, city): Promise<UpdateResult> {
    return await this.cityRepository.update(cityId, city);
  }

  async deleteCity(cityId): Promise<DeleteResult> {
    return await this.cityRepository.delete(cityId);
  }
}
