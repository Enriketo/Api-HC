import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cities } from "../entities/city.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';

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

  async paginate(options: IPaginationOptions): Promise<Pagination<Cities>> {
    return paginate<Cities>(this.cityRepository, options);
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
