import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { ScheduleEntity } from './schedule.entity';
  
  @EventSubscriber()
  export class ScheduleSubscriber implements EntitySubscriberInterface<ScheduleEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return ScheduleEntity;
    }
  
    beforeInsert(event: InsertEvent<ScheduleEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }