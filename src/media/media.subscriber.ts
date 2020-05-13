import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { MediaEntity } from './media.entity';
  
  @EventSubscriber()
  export class MediaSubscriber implements EntitySubscriberInterface<MediaEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return MediaEntity;
    }
  
    beforeInsert(event: InsertEvent<MediaEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }