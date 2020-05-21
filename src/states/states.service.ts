import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { StateEntity } from './state.entity';
import { StateClass } from './classes/state.class';
import { CreateStateDTO } from './dto/create-state.dto';

export type State = any;
@Injectable()
export class StatesService {
    StateEntity: any;

    private readonly states: State[];
    create(state: CreateStateDTO): StateClass {
        this.states.push(state);
        return state;
    }

    constructor(
        @InjectRepository(StateEntity)
        private statesRepository: Repository<StateEntity>,
        private connection: Connection,
    ) { }

    getStates(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.StateEntity);
        });
    }
    getState(stateID): Promise<any> {
        let id = Number(stateID);
        return new Promise(resolve => {
            const state = this.StateEntity.find(state => state.id === id);
            if (!state) {
                throw new HttpException('State does not exist!', 404);
            }
            resolve(state);
        });
    }
    addState(state): Promise<any> {
        return new Promise(resolve => {
            this.StateEntity.push(state);
            resolve(this.StateEntity);
        });
    }
    deleteState(stateID): Promise<any> {
        let id = Number(stateID);
        return new Promise(resolve => {
            let index = this.StateEntity.findIndex(state => state.id === id);
            if (index === -1) {
                throw new HttpException('State does not exist!', 404);
            }
            this.StateEntity.splice(1, index);
            resolve(this.StateEntity);
        });
    }

    findAll(): Promise<StateEntity[]> {
        return this.statesRepository.find();
    }

    findOne(id: string): Promise<StateEntity> {
        return this.statesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.statesRepository.delete(id);
    }
    async createMany(states: StateEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(states[0]);
          await queryRunner.manager.save(states[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(states[0]);
            await manager.save(states[1]);
          });
      }
}
