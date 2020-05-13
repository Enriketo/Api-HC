import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { StateEntity } from './state.entity';
  
  @EventSubscriber()
  export class StateSubscriber implements EntitySubscriberInterface<StateEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return StateEntity;
    }
  
    beforeInsert(event: InsertEvent<StateEntity>) {
      console.log(`BEFORE USER INSERTED: `, event.entity);
    }
  }