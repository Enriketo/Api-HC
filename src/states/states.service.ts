import { Injectable, HttpException } from '@nestjs/common';
import { STATES } from '../../mocks/states.mock';

@Injectable()
export class StatesService {
    states = STATES;

    getStates(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.states);
        });
    }
    getState(stateID): Promise<any> {
        let id = Number(stateID);
        return new Promise(resolve => {
            const state = this.states.find(state => state.id === id);
            if (!state) {
                throw new HttpException('State does not exist!', 404);
            }
            resolve(state);
        });
    }
    addState(state): Promise<any> {
        return new Promise(resolve => {
            this.states.push(state);
            resolve(this.states);
        });
    }
    deleteState(stateID): Promise<any> {
        let id = Number(stateID);
        return new Promise(resolve => {
            let index = this.states.findIndex(state => state.id === id);
            if (index === -1) {
                throw new HttpException('State does not exist!', 404);
            }
            this.states.splice(1, index);
            resolve(this.states);
        });
    }
}
