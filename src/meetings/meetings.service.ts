import { Injectable, HttpException } from '@nestjs/common';
import { MEETINGS } from '../../mocks/meetings.mock';

@Injectable()
export class MeetingsService {
    meetings = MEETINGS;

    getMeetings(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.meetings);
        });
    }
    getMeet(meetID): Promise<any> {
        let id = Number(meetID);
        return new Promise(resolve => {
            const meet = this.meetings.find(meet => meet.id === id);
            if (!meet) {
                throw new HttpException('Meet does not exist!', 404);
            }
            resolve(meet);
        });
    }
    addMeet(meet): Promise<any> {
        return new Promise(resolve => {
            this.meetings.push(meet);
            resolve(this.meetings);
        });
    }
    deleteMeet(meetID): Promise<any> {
        let id = Number(meetID);
        return new Promise(resolve => {
            let index = this.meetings.findIndex(meet => meet.id === id);
            if (index === -1) {
                throw new HttpException('Meet does not exist!', 404);
            }
            this.meetings.splice(1, index);
            resolve(this.meetings);
        });
    }
}
