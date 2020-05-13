import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { EmployeeEntity } from './employee.entity';
import { EmployeeSubscriber } from './employee.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity])],
    exports: [TypeOrmModule],
    controllers: [EmployeesController],
    providers: [EmployeesService, EmployeeSubscriber]
})
export class EmployeesModule {}
