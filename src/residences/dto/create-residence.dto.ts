export class CreateResidenceDTO {
    readonly id: number;
    readonly city_id : number; // [ref: > cities.id]
    readonly email: string; // [not null]
    readonly name: string;
    readonly location: number; // [increment]
    readonly address: string;
    readonly place_avalaible: boolean;
    readonly media_id: number; // [ref: > media.id]
    readonly createdAt: Date;
    readonly updatedAt: Date;
}