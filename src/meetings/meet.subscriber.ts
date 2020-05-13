import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { MeetEntity } from './meet.entity';
  
  @EventSubscriber()
  export class MeetSubscriber implements EntitySubscriberInterface<MeetEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return MeetEntity;
    }
  
    beforeInsert(event: InsertEvent<MeetEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }