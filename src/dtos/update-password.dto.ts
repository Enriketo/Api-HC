import { IsString, IsNotEmpty, MinLength, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly currentPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: 'La contraseña no es aceptada',
    }
  )
  @ApiProperty({
    description: 'La contraseña debe tener al menos 8 caracteres'
  })
  readonly newPassword: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly confirmPassword: string;
} 