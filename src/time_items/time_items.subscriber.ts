import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { TimeItemEntity } from './time_item.entity';
  
  @EventSubscriber()
  export class TimeItemSubscriber implements EntitySubscriberInterface<TimeItemEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return TimeItemEntity;
    }
  
    beforeInsert(event: InsertEvent<TimeItemEntity>) {
      console.log(`BEFORE USER INSERTED: `, event.entity);
    }
  }