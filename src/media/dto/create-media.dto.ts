export class CreateMediaDTO {
    readonly id: number;
    readonly type: string;
    readonly format: string;
    readonly url: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}