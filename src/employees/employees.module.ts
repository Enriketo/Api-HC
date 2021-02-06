import { Module } from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { EmployeesController } from "./employees.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employees } from "./employee.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Employees])],
  providers: [EmployeesService],
  controllers: [EmployeesController],
  exports: [EmployeesService]
})
export class EmployeesModule {}
