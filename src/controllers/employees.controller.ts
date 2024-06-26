import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Param,
  NotFoundException,
  HttpStatus,
  Put,
  Delete,
  UseGuards,
  Query
} from "@nestjs/common";
import { Employees } from "../entities/employee.entity";
import { EmployeesService } from "../services/employees.service";
import { CreateEmployeeDto } from "../dtos/create-employee.dto";
import { UpdateEmployeeDto } from "../dtos/update-employee.dto";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Roles } from "../auth/roles.decorator";
import { role } from '../entities/employee.entity';
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags("Employees")
@Controller("api/employees")
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({
    description: "Create employee"
  })
  @ApiResponse({
    status: 201,
    description: "Employee has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createEmployee: CreateEmployeeDto) {
    return await this.employeesService.addEmployee(createEmployee);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<Employees>> {
    limit = limit > 100 ? 100 : limit;
    return this.employeesService.paginate({
      page,
      limit,
      route: `/api/employees`,
    });
  }
  @ApiOperation({
    description: "Get all employees"
  })
  @ApiResponse({
    status: 200,
    description: "Get all employees"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<Employees[]> {
    return this.employeesService.findAll();
  }

  @Get("id/:employeeId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Get employee by id"
  })
  @ApiParam({ name: "employeeId" })
  @ApiResponse({
    status: 200,
    description: "Get employee information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getEmployee(@Res() res, @Param("employeeId") employeeId) {
    const employee = await this.employeesService.findOneById(employeeId);
    if (!employee) {
      throw new NotFoundException("Employee does not exist!");
    }
    return res.status(HttpStatus.OK).json(employee);
  }

  @Put("id/:employeeId")//
  //@Put("id/:StatusEmployeeId")//
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Update employee using id"
  })
  @ApiParam({ name: "employeeId" })
  @ApiResponse({
    status: 200,
    description: "Employee has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateEmployee(
    @Res() res,
    @Param("employeeId") employeeId: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto
  ) {
    const editedEmployee = await this.employeesService.editEmployee(
      employeeId,
      updateEmployeeDto
    );
    if (!editedEmployee) {
      throw new NotFoundException("Employee does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Employee has been successfully updated",
      post: editedEmployee
    });
  }

  @Delete("id/:employeeId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(role.admin)
  @ApiOperation({
    description: "Delete employee using id"
  })
  @ApiParam({ name: "employeeId" })
  @ApiResponse({
    status: 200,
    description: "Employee has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteEmployee(@Res() res, @Param("employeeId") employeeId) {
    const deletedEmployee = await this.employeesService.deleteEmployee(
      employeeId
    );
    if (!deletedEmployee) {
      throw new NotFoundException("Employee does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Employee has been deleted!",
      employee: deletedEmployee
    });
  }
}
