export class CreateMediaDTO {
    readonly id: number;
    //readonly type: type;
    readonly format: string;
    readonly url: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}