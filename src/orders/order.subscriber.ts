import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { OrderEntity } from './order.entity';
  
  @EventSubscriber()
  export class OrderSubscriber implements EntitySubscriberInterface<OrderEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return OrderEntity;
    }
  
    beforeInsert(event: InsertEvent<OrderEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }