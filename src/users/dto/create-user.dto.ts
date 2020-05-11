export class CreateUserDTO {
    readonly id: number;
    readonly first_name: string;
    readonly last_name: string;
    readonly username: string; // [not null, unique]
    readonly doc_type: string;
    readonly doc_number: number;
    readonly email: string; // [not null, unique]
    readonly password: string;// varbinary[not null]
    readonly gender: string;
    readonly phone: number;
    readonly discapacity: boolean;
    readonly opt_in: boolean;
    readonly showName: boolean;
    readonly dob: Date;
    readonly preferences: string; // json
    readonly address: string;
    readonly city_id: number; // [ref: > cities.id]
    readonly media_id: number; // int[ref: > media.id]
    readonly createdAt: Date;
    readonly updatedAt: Date;
}