import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { ResidenceEntity } from './residence.entity';
  
  @EventSubscriber()
  export class ResidenceSubscriber implements EntitySubscriberInterface<ResidenceEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return ResidenceEntity;
    }
  
    beforeInsert(event: InsertEvent<ResidenceEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }