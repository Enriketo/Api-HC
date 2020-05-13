import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { CountryEntity } from './country.entity';
  
  @EventSubscriber()
  export class CountrySubscriber implements EntitySubscriberInterface<CountryEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return CountryEntity;
    }
  
    beforeInsert(event: InsertEvent<CountryEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }