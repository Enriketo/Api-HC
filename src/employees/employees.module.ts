import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { EmployeeEntity } from './employee.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity])],
    exports: [TypeOrmModule],
    controllers: [EmployeesController],
    providers: [EmployeesService]
})
export class EmployeesModule {}
