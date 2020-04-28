import { Injectable, HttpException } from '@nestjs/common';
import { TIME_ITEMS } from '../../mocks/time-items.mock';

@Injectable()
export class TimeItemsService {
    time_items = TIME_ITEMS;

    getTimeItems(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.time_items);
        });
    }
    getTimeItem(time_itemID): Promise<any> {
        let id = Number(time_itemID);
        return new Promise(resolve => {
            const time_item = this.time_items.find(time_item => time_item.id === id);
            if (!time_item) {
                throw new HttpException('Time items does not exist!', 404);
            }
            resolve(time_item);
        });
    }
    addTimeItem(time_item): Promise<any> {
        return new Promise(resolve => {
            this.time_items.push(time_item);
            resolve(this.time_items);
        });
    }
    deleteTimeItem(time_itemID): Promise<any> {
        let id = Number(time_itemID);
        return new Promise(resolve => {
            let index = this.time_items.findIndex(time_item => time_item.id === id);
            if (index === -1) {
                throw new HttpException('Time items does not exist!', 404);
            }
            this.time_items.splice(1, index);
            resolve(this.time_items);
        });
    }
}
