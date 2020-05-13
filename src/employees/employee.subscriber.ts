import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { EmployeeEntity } from './employee.entity';
  
  @EventSubscriber()
  export class EmployeeSubscriber implements EntitySubscriberInterface<EmployeeEntity> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return EmployeeEntity;
    }
  
    beforeInsert(event: InsertEvent<EmployeeEntity>) {
      console.log(`BEFORE SCHEDULE INSERTED: `, event.entity);
    }
  }