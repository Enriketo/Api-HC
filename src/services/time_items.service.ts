import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TimeItems } from "../entities/time_item.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';

@Injectable()
export class TimeItemsService {
  constructor(
    @InjectRepository(TimeItems)
    private timeItemRepository: Repository<TimeItems>
  ) {}

  async create(timeItem): Promise<TimeItems> {
    console.log(timeItem);
    return await this.timeItemRepository.save(timeItem);
  }

  async findAll(): Promise<TimeItems[]> {
    return await this.timeItemRepository.find();
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<TimeItems>> {
    return paginate<TimeItems>(this.timeItemRepository, options);
  }

  async findOneById(timeItemId): Promise<TimeItems> {
    return await this.timeItemRepository.findOne(timeItemId);
  }

  async editTimeItem(timeItemId, timeItem): Promise<UpdateResult> {
    return await this.timeItemRepository.update(timeItemId, timeItem);
  }

  async deleteTimeItem(timeItemId): Promise<DeleteResult> {
    return await this.timeItemRepository.delete(timeItemId);
  }
}
