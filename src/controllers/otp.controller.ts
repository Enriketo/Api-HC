import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { OtpService } from '../auth/strategies/mail/otp.service';
import { UsersService } from "../services/users.service";
import { EmployeesService } from "../services/employees.service";
import { AuthDto } from '../dtos/auth.dto';
import { OtpDto } from '../dtos/otp.dto';
//import { ResetPasswordDto } from '../dtos/rstPss.dto';
//import { PasswordResetService } from '../auth/strategies/mail/password-reset.service';

@Controller('auth')
export class OtpController {
  constructor(
    private readonly otpService: OtpService,
    private readonly usersService: UsersService,
    private readonly employeesService: EmployeesService,
  ) {}

  @Post('otp')
  async loginWithOtp(@Body() authDto: AuthDto): Promise<{ success: boolean }> {
    const { email, type, updatedAt } = authDto;
  
    // Validar el formato del correo electrónico
    const user = type === 'U'
      ? await this.usersService.findOneByMail(email)
      : await this.employeesService.findOneByMail(email);
  
    if (!user) {
      throw new BadRequestException('User not found');
    }
  
    const userSecret = this.otpService.generateSecret();
    const otp = this.otpService.generateOtpCode(userSecret);
    await this.otpService.sendOtpByEmail(email, otp);
  
    // Guardar el secreto generado en el usuario correspondiente
    const expiryDate = this.otpService.generateOtpExpiry(5); // OTP válido por 5 minutos
    if (type === 'U') {
      await this.usersService.updateUserSecret(user.id, userSecret, expiryDate, updatedAt);
    } else {
      await this.employeesService.updateEmployeeSecret(user.id, userSecret, expiryDate, updatedAt);
    }

    return { success: true };
  }
  
  @Post('verify-otp')
  async verifyOtp(@Body() verifyOtpDto: OtpDto): Promise<{ success: boolean }> {
    const { email, otp, type } = verifyOtpDto;

    const user = type === 'U'
      ? await this.usersService.findOneByMail(email)
      : await this.employeesService.findOneByMail(email);

    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

    if (new Date() > new Date(user.tokenExpires)) {
      throw new BadRequestException('OTP expirado');
    }

    const isValid = this.otpService.verifyOtpCode(user.token, otp);

    if (!isValid) {
      throw new BadRequestException('OTP inválido');
    }

    return { success: true };
  }

}
