import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { CityEntity } from './city.entity';
  
  @EventSubscriber()
  export class CitySubscriber implements EntitySubscriberInterface<CityEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return CityEntity;
    }
  
    beforeInsert(event: InsertEvent<CityEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }