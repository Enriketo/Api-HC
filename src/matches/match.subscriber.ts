import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { MatchEntity } from './match.entity';
  
  @EventSubscriber()
  export class MatchSubscriber implements EntitySubscriberInterface<MatchEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return MatchEntity;
    }
  
    beforeInsert(event: InsertEvent<MatchEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }