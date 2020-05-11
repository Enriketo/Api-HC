import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees.module';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';

@Module({
  imports: [EmployeesModule],
  providers: [EmployeesService],
  controllers: [EmployeesController]
})
export class EmployeeHttpModule {}
