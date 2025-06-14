import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getRepository } from "typeorm";
import { Employees } from "../entities/employee.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { SECRET } from "../config";
import { CreateEmployeeDto } from "../dtos/create-employee.dto";
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';
import * as bcrypt from 'bcrypt';
var CryptoJS = require("crypto-js");

export type Employee = any;
const jwt = require("jsonwebtoken");

@Injectable()
export class EmployeesService {
  employees: Employee;

  constructor(
    @InjectRepository(Employees)
    private employeeRepository: Repository<Employees>
  ) {}

  async addEmployee(
    dto: CreateEmployeeDto
  ): Promise<{ user: { email: string; username: string; token: any } }> {
    // check uniqueness of username/email
    const { username, email, password } = dto;
    const qb = await getRepository(Employees)
      .createQueryBuilder("employee")
      .where("employee.username = :username", { username })
      .orWhere("employee.email = :email", { email });

    const employee = await qb.getOne();

    if (employee) {
      const errs = { username: "Username and email must be unique." };
      throw new HttpException(
        { message: "Input data validation failed", errs },
        HttpStatus.BAD_REQUEST
      );
    }

    // create new user
    const newEmployee = new Employees();
    newEmployee.username = username;
    newEmployee.email = email;
    //Hashing password 
    const hash = await bcrypt.hash(password, 10);
    newEmployee.password = hash;
    //Bank number to cripted data
    const crypted = await CryptoJS.AES.encrypt(newEmployee.paymentCode, 'HotCompanyAPP').toString();
    newEmployee.paymentCode = crypted;

    const savedEmployee = await this.employeeRepository.save(newEmployee);
    return this.buildEmployeeRO(savedEmployee);
  }

  async findOne(username: string): Promise<Employee | undefined> {
    return this.employeeRepository.find({ username });
  }

  getUser(userID): Promise<any> {
    let id = Number(userID);
    return new Promise(resolve => {
      const user = this.employees.find(user => user.id === id);
      if (!user) {
        throw new HttpException("Employee does not exist!", 404);
      }
      resolve(user);
    });
  }

  async create(employee): Promise<Employees> {
    console.log(employee);//retirar
    return await this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employees[]> {
    return await this.employeeRepository.find();
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Employees>> {
    return paginate<Employees>(this.employeeRepository, options);
  }

  async findOneById(employeeId): Promise<Employees> {
    return await this.employeeRepository.findOne(employeeId);
  }

  async findOneByMail(email): Promise<Employees> {
    return await this.employeeRepository.findOne({ where: { email } });
  }

  async editEmployee(employeeId, employee): Promise<UpdateResult> {
    return await this.employeeRepository.update(employeeId, employee);
  }

  async deleteEmployee(employeeId): Promise<DeleteResult> {
    return await this.employeeRepository.delete(employeeId);
  }

  public generateJWT(employee) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        id: employee.id,
        username: employee.username,
        email: employee.email,
        exp: exp.getTime() / 1000
      },
      SECRET
    );
  }

  private buildEmployeeRO(employee: Employees) {
    const employeeRO = {
      username: employee.username,
      email: employee.email,
      token: this.generateJWT(employee)
    };

    return { user: employeeRO };
  }

  async updateEmployeeSecret(employeeId: string, newSecret: string, expiryDate: Date, updatedAt: Date ): Promise<void> {
    await this.employeeRepository.update(employeeId, {
      token: newSecret,
      tokenExpires: expiryDate, 
      updatedAt: updatedAt
    });
  }

  async updatePassword(employeeId: string, currentPassword: string, newPassword: string): Promise<void> {
    try {
      // Buscar el empleado
      const employee = await this.employeeRepository.findOne(employeeId);
      if (!employee) {
        throw new HttpException('Empleado no encontrado', HttpStatus.NOT_FOUND);
      }

      // Verificar la contraseña actual
      const isPasswordValid = await bcrypt.compare(currentPassword, employee.password);
      if (!isPasswordValid) {
        throw new HttpException('La contraseña actual es incorrecta', HttpStatus.UNAUTHORIZED);
      }

      // Hashear la nueva contraseña
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Actualizar la contraseña
      const updateResult = await this.employeeRepository.update(employeeId, {
        password: hashedPassword,
        updatedAt: new Date()
      });

      if (updateResult.affected === 0) {
        throw new HttpException('Error al actualizar la contraseña', HttpStatus.INTERNAL_SERVER_ERROR);
      }
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
