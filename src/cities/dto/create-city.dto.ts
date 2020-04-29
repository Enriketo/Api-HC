export class CreateCityDTO {
    readonly id: number;
    readonly state_id: number; // [ref: > states.id] //
    readonly city: string;
    readonly code: string;
    readonly iso_code2: string;
    readonly iso_code3: string;
    readonly location: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}