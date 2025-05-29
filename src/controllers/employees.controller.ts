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
  Query,
  Patch,
  UnauthorizedException,
  HttpException
} from "@nestjs/common";
import { Employees } from "../entities/employee.entity";
import { EmployeesService } from "../services/employees.service";
import { CreateEmployeeDto } from "../dtos/create-employee.dto";
import { UpdateEmployeeDto } from "../dtos/update-employee.dto";
import { UpdatePasswordDto } from "../dtos/update-password.dto";
import { ApiTags, ApiParam, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { Roles } from "../auth/roles.decorator";
import { role } from '../entities/employee.entity';
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags("Employees")
@ApiBearerAuth()
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
    @Param("employeeId") employeeId: string,
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

  @Patch(':id/password')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: "Actualizar contraseña del empleado"
  })
  @ApiParam({ name: "id" })
  @ApiResponse({
    status: 200,
    description: "Contraseña actualizada exitosamente"
  })
  @ApiResponse({ status: 401, description: "Contraseña actual incorrecta" })
  @ApiResponse({ status: 404, description: "Empleado no encontrado" })
  async updatePassword(
    @Param('id') id: string,
    @Body() updatePasswordDto: UpdatePasswordDto
  ) {
    try {
      // Verificar que las contraseñas nuevas coincidan
      if (updatePasswordDto.newPassword !== updatePasswordDto.confirmPassword) {
        throw new UnauthorizedException('Las contraseñas nuevas no coinciden');
      }

      await this.employeesService.updatePassword(
        id,
        updatePasswordDto.currentPassword,
        updatePasswordDto.newPassword
      );

      return {
        statusCode: HttpStatus.OK,
        message: 'Contraseña actualizada exitosamente'
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Error al actualizar la contraseña',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
