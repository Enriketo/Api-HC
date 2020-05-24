import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { Countries } from './country.entity';

  @EventSubscriber()
  export class CountrySubscriber implements EntitySubscriberInterface<Countries> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }

    listenTo() {
      return Countries;
    }

    beforeInsert(event: InsertEvent<Countries>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }
