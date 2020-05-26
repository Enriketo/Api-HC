import { Controller, Get, Post, Body, Res, Param, NotFoundException, HttpStatus, Put, Delete, HttpException } from '@nestjs/common';
import { Employees } from './employee.entity';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/';
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginEmployeeDto } from './dto/login-employee.dto';

@ApiTags('Employees')
@Controller('api/employees')
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
    ) {
  }

    @Post('login')
    async login(@Body() loginEmployeeDto: LoginEmployeeDto): Promise<{ email: string; token: any; username: string }> {
        const usr = await this.employeesService.getUser(loginEmployeeDto);
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
      description: 'Create employee',
    })
    @ApiResponse({
      status: 201,
      description: 'Employee has been created',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async create(@Body() createEmployee: CreateEmployeeDto) {
      return await this.employeesService.create(createEmployee);
    }
  
    @Get()
    @ApiOperation({
      description: 'Get all employees',
    })
    @ApiResponse({
      status: 200,
      description: 'Get all employees',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async findAll(): Promise<Employees[]> {
      return this.employeesService.findAll();
    }
  
    @Get('id/:employeeId')
    @ApiOperation({
      description: 'Get employee by id',
    })
    @ApiParam({ name: 'employeeId' })
    @ApiResponse({
      status: 200,
      description: 'Get employee information',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async getEmployee(@Res() res, @Param('employeeId') employeeId) {
      const employee = await this.employeesService.findOneById(employeeId);
      if (!employee) {
        throw new NotFoundException('Employee does not exist!');
      }
      return res.status(HttpStatus.OK).json(employee);
    }
  
    @Put('id/:employeeId')
    @ApiOperation({
      description: 'Update employee using id',
    })
    @ApiParam({ name: 'employeeId' })
    @ApiResponse({
      status: 200,
      description: 'Employee has been updated',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async updateEmployee(
      @Res() res,
      @Param('employeeId') employeeId: number,
      @Body() updateEmployeeDto: UpdateEmployeeDto) {
      const editedEmployee = await this.employeesService.editEmployee(employeeId, updateEmployeeDto);
      if (!editedEmployee) {
        throw new NotFoundException('Employee does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Employee has been successfully updated',
        post: editedEmployee,
      });
    }
  
    @Delete('id/:employeeId')
    @ApiOperation({
      description: 'Delete employee using id',
    })
    @ApiParam({ name: 'employeeId' })
    @ApiResponse({
      status: 200,
      description: 'Employee has been deleted!',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async deleteEmployee(
      @Res() res,
      @Param('employeeId') employeeId,
    ) {
      const deletedEmployee = await this.employeesService.deleteEmployee(employeeId);
      if (!deletedEmployee) {
        throw new NotFoundException('Employee does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Employee has been deleted!',
        employee: deletedEmployee,
      });
    }
  }
  