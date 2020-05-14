import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { EmployeeEntity } from './employee.entity';
//import { EMPLOYEES } from '../../mocks/employees.mock';

@Injectable()
export class EmployeesService {
    EmployeeEntity: any;
    constructor(
        @InjectRepository(EmployeeEntity)
        private employeesRepository: Repository<EmployeeEntity>,
        private connection: Connection,
    ) { }

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
    addEmployee(employee): Promise<any> {
        return new Promise(resolve => {
            this.EmployeeEntity.push(employee);
            resolve(this.EmployeeEntity);
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

    findOne(id: string): Promise<EmployeeEntity> {
        return this.employeesRepository.findOne(id);
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
}
