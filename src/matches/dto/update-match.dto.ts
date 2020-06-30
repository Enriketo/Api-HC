import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMatchDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly type: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly username: string; 

    @IsNotEmpty()
    @ApiProperty()
    readonly orderApproved: boolean;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;

}
