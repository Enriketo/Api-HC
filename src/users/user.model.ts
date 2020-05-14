import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class UserModel extends Model<UserModel> {
    @Column
    id: number;

    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    username: string; // [not null, unique]

    @Column
    doc_type: string;

    @Column
    doc_number: number;

    @Column
    email: string; // [not null, unique]

    @Column
    password: string;// varbinary[not null]

    @Column
    gender: string;

    @Column
    phone: number;

    @Column
    discapacity: boolean;

    @Column
    opt_in: boolean;

    @Column
    showName: boolean;

    @Column
    dob: Date;

    @Column
    preferences: string; // json

    @Column
    address: string;

    @Column
    city_id: number; // [ref: > cities.id]

    @Column
    media_id: number; // int[ref: > media.id]

    @Column
    createdAt: Date;

    @Column
    updatedAt: Date;
}