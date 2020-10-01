import { Injectable } from '@nestjs/common';
import {Schedule} from "../schedule/schedule.entity";
import { SECRET } from "../config";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtDecryptService {
    async create(token): Promise<Schedule> {
        return await this.getUserIdFromToken(token);
    }

    getUserIdFromToken(authorization) {
        if (!authorization) {
            return null;
        }
        const token = authorization.split(' ')[1];
        const decoded: any = jwt.verify(token, SECRET);
        return decoded.id;
    }
}
