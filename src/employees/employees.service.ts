import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { EMPLOYEES } from '../../mocks/employees.mock';

@Injectable()
export class EmployeesService {
    employees = EMPLOYEES;

    getEmployees(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.employees);
        });
    }
    getEmployee(employeeID): Promise<any> {
        let id = Number(employeeID);
        return new Promise(resolve => {
            const employee = this.employees.find(employee => employee.id === id);
            if (!employee) {
                throw new HttpException('Employee does not exist!', 404);
            }
            resolve(employee);
        });
    }
    addEmployee(employee): Promise<any> {
        return new Promise(resolve => {
            this.employees.push(employee);
            resolve(this.employees);
        });
    }
    deleteEmployee(employeeID): Promise<any> {
        let id = Number(employeeID);
        return new Promise(resolve => {
            let index = this.employees.findIndex(employee => employee.id === id);
            if (index === -1) {
                throw new HttpException('Employee does not exist!', 404);
            }
            this.employees.splice(1, index);
            resolve(this.employees);
        });
    }
    constructor(
        @InjectRepository(EmployeeEntity)
        private employeesRepository: Repository<EmployeeEntity>,
    ) { }

    findAll(): Promise<EmployeeEntity[]> {
        return this.employeesRepository.find();
    }

    findOne(id: string): Promise<EmployeeEntity> {
        return this.employeesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.employeesRepository.delete(id);
    }
}
