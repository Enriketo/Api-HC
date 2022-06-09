import { Module } from "@nestjs/common";
import { EmployeesService } from "../services/employees.service";
import { EmployeesController } from "../controllers/employees.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employees } from "../entities/employee.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Employees])],
  providers: [EmployeesService],
  controllers: [EmployeesController],
  exports: [EmployeesService]
})
export class EmployeesModule {}
