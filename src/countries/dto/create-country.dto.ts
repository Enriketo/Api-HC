export class CreateCountryDTO {
    readonly id: number;
    readonly country: string;
    readonly code: string;
    readonly iso_code2: string;
    readonly iso_code3: string;
    readonly location: string; // json
    readonly prefix: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}