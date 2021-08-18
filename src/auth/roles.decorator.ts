import { SetMetadata } from '@nestjs/common';
import { role } from '../employees/employee.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: role[]) => SetMetadata(ROLES_KEY, roles);