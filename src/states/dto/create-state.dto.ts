export class CreateStateDTO {
    readonly id: number;
    readonly country_id: number; // [ref: > countries.id]
    readonly state: string;
    readonly code: string; //  [ref: > residences.id]
    readonly iso_code2: string;
    readonly iso_code3: string;
    readonly location: string; // json
    readonly createdAt: Date;
    readonly updatedAt: Date;
}