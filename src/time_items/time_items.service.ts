import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TimeItems } from "./time_item.entity";
import { UpdateResult, DeleteResult } from "typeorm";

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
