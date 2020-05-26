import { IsNotEmpty } from 'class-validator';

export class LoginEmployeeDto {

    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
}
