export class CreateEmployeeDTO {
    readonly id: number;
    readonly first_name: string;
    readonly last_name: string;
    readonly username: string; // [not null, unique]
    readonly doc_type: string;
    readonly doc_number: number;
    readonly email: string; // [not null, unique]
    readonly password: string;// varbinary[not null]
    readonly isAdmin: boolean;
    readonly gender: string;
    readonly showName: boolean;
    readonly preferences: string; // json
    readonly discapacity: boolean;
    readonly discapacity_acpt: boolean;
    readonly time_item_id: number; // [ref: > time_items.id]
    readonly city_id: number; // [ref: > cities.id]
    readonly address: string;
    readonly payment_code: string;
    readonly bank: string;
    readonly status: string;
    readonly role: string;
    readonly opt_in: boolean;
    readonly average_calification: number; // float
    readonly penality: string;
    readonly total_penalities: number;
    readonly media_id: number; // int[ref: > media.id]
    readonly createdAt: Date;
    readonly updatedAt: Date;
}