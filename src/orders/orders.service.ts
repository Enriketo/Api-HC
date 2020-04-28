import { Injectable, HttpException } from '@nestjs/common';
import { ORDERS } from '../../mocks/orders.mock';

@Injectable()
export class OrdersService {
    orders = ORDERS;

    getOrders(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.orders);
        });
    }
    getOrder(orderID): Promise<any> {
        let id = Number(orderID);
        return new Promise(resolve => {
            const order = this.orders.find(order => order.id === id);
            if (!order) {
                throw new HttpException('Order does not exist!', 404);
            }
            resolve(order);
        });
    }
    addOrder(order): Promise<any> {
        return new Promise(resolve => {
            this.orders.push(order);
            resolve(this.orders);
        });
    }
    deleteOrder(orderID): Promise<any> {
        let id = Number(orderID);
        return new Promise(resolve => {
            let index = this.orders.findIndex(order => order.id === id);
            if (index === -1) {
                throw new HttpException('Order does not exist!', 404);
            }
            this.orders.splice(1, index);
            resolve(this.orders);
        });
    }
}
