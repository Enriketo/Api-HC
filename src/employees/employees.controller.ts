import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDTO } from './dto/create-employee.dto';

@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Get()
    async getEmployees() {
        const employees = await this.employeesService.getEmployees();
        return employees;
    }

    @Get(':employeeID')
    async getEmployee(@Param('employeeID') employeeID) {
        const employee = await this.employeesService.getEmployee(employeeID);
        return employee;
    }

    @Post()
    async addEmployee(@Body() createEmployeeDTO: CreateEmployeeDTO) {
        const employee = await this.employeesService.addEmployee(createEmployeeDTO);
        return employee;
    }

    @Delete()
    async deleteEmployee(@Query() query) {
        const employees = await this.employeesService.deleteEmployee(query.employeeID);
        return employees;
    }
}
