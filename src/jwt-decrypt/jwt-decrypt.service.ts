import { Injectable } from '@nestjs/common';
import { Users } from "../users/user.entity";
import { SECRET } from "../config";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtDecryptService {
    async create(token): Promise<Users> {
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
