import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Orders } from "./order.entity";
import { UpdateResult, DeleteResult } from "typeorm";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private orderRepository: Repository<Orders>
  ) {}

  async create(order): Promise<Orders> {
    console.log(order);
    return await this.orderRepository.save(order);
  }

  async findAll(): Promise<Orders[]> {
    return await this.orderRepository.find();
  }

  async findOneById(orderId): Promise<Orders> {
    return await this.orderRepository.findOne(orderId);
  }

  async editOrder(orderId, order): Promise<UpdateResult> {
    return await this.orderRepository.update(orderId, order);
  }

  async deleteOrder(orderId): Promise<DeleteResult> {
    return await this.orderRepository.delete(orderId);
  }
}
