import { Controller, HttpException, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDTO } from './dto/create-employee.dto';
import { LoginEmployeeDto } from './dto/login-employee';
import { EmployeeEntity } from './employee.entity';

@ApiBearerAuth()
@ApiTags('employees')
@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Post('login')
    async login(@Body() loginEmployeeDto: LoginEmployeeDto): Promise<{ email: string; token: any; username: string }> {
        const usr = await this.employeesService.getEmployee(loginEmployeeDto);
        const errors = {User: ' not found'};
        if (!usr) {
            throw new HttpException({errors}, 401);
        }
        const token = await this.employeesService.generateJWT(usr);
        const {email, username} = usr;
        return {email, token, username};
    }

    @Post()
    @ApiOperation({ 
        summary: 'Create user' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'User has been created.' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Not found.' 
    })
    async create(@Body() createUserDto: CreateEmployeeDTO){
      return this.employeesService.create(createUserDto);
    }

    
    @Post()
    async addEmployee(@Body() createEmployeeDTO: CreateEmployeeDTO) {
        const employee = await this.employeesService.addEmployee(createEmployeeDTO);
        return employee;
    }

    @Get()
    async getEmployees() {
        const employees = await this.employeesService.getEmployees();
        return employees;
    }

    @Get(':employeeID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: EmployeeEntity,
    })
    async getEmployee(@Param('employeeID') employeeID) {
        const employee = await this.employeesService.getEmployee(employeeID);
        return employee;
    }

    @Delete()
    async deleteEmployee(@Query() query) {
        const employees = await this.employeesService.deleteEmployee(query.employeeID);
        return employees;
    }
}
