import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SECRET } from '../config';
import { CreateEmployeeDTO } from './dto/create-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository, Connection, getRepository} from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { EmployeeClass } from './classes/employee.class';

export type Employee = any;
const jwt = require('jsonwebtoken');

@Injectable()
export class EmployeesService {
    EmployeeEntity: any;
    
    private readonly employees: Employee[];
    create(employee: CreateEmployeeDTO): EmployeeClass {
        this.employees.push(employee);
        return employee;
    }

    constructor(
        @InjectRepository(EmployeeEntity)
        private employeesRepository: Repository<EmployeeEntity>,
        private connection: Connection,
    ) { }

    async addEmployee(dto: CreateEmployeeDTO): Promise<{ user: { email: string; username: string; token: any } }> {

        // check uniqueness of username/email
        const {username, email, password} = dto;
        const qb = await getRepository(EmployeeEntity)
            .createQueryBuilder('employee')
            .where('user.username = :username', { username })
            .orWhere('user.email = :email', { email });

        const employee = await qb.getOne();

        if (employee) {
            const errs = {username: 'Username and email must be unique.'};
            throw new HttpException({message: 'Input data validation failed', errs}, HttpStatus.BAD_REQUEST);

        }

        // create new user
        const newEmployee = new EmployeeEntity();
        newEmployee.username = username;
        newEmployee.email = email;
        newEmployee.password = password;

        const errors = await validate(newEmployee);
        if (errors.length > 0) {
            const err = {username: 'Userinput is not valid.'};
            throw new HttpException({message: 'Input data validation failed', err}, HttpStatus.BAD_REQUEST);

        } else {
            const savedEmployee = await this.employeesRepository.save(newEmployee);
            return this.buildEmployeeRO(savedEmployee);
        }
    }

    async findOne(username: string): Promise<Employee | undefined> {
        return this.employees.find(employee => employee.username === username);
    }

    getEmployees(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.EmployeeEntity);
        });
    }
    getEmployee(employeeID): Promise<any> {
        let id = Number(employeeID);
        return new Promise(resolve => {
            const employee = this.EmployeeEntity.find(employee => employee.id === id);
            if (!employee) {
                throw new HttpException('Employee does not exist!', 404);
            }
            resolve(employee);
        });
    }

    deleteEmployee(employeeID): Promise<any> {
        let id = Number(employeeID);
        return new Promise(resolve => {
            let index = this.EmployeeEntity.findIndex(employee => employee.id === id);
            if (index === -1) {
                throw new HttpException('Employee does not exist!', 404);
            }
            this.EmployeeEntity.splice(1, index);
            resolve(this.EmployeeEntity);
        });
    }

    findAll(): Promise<EmployeeEntity[]> {
        return this.employeesRepository.find();
    }

    async remove(id: string): Promise<void> {
        await this.employeesRepository.delete(id);
    }
    async createMany(employees: EmployeeEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(employees[0]);
          await queryRunner.manager.save(employees[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(employees[0]);
            await manager.save(employees[1]);
          });
      }

      public generateJWT(employee) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign({
            id: employee.id,
            username: employee.username,
            email: employee.email,
            exp: exp.getTime() / 1000,
        }, SECRET);
    }

    private buildEmployeeRO(employee: EmployeeEntity) {
        const employeeRO = {
            username: employee.username,
            email: employee.email,
            token: this.generateJWT(employee),
        };

        return {user: employeeRO};
    }
}
