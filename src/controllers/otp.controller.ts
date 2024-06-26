import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { OtpService } from '../auth/strategies/mail/otp.service';

@Controller('auth')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post('')
  async loginWithOtp(@Body() body: { email: string }): Promise<{ success: boolean }> {
    // Validar el formato del correo electrónico usando una expresión regular simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      throw new BadRequestException('Correo electrónico no válido');
    }

    // Envía el código OTP por correo electrónico
    const userSecret = this.otpService.generateSecret();
    const otp = this.otpService.generateOtpCode(userSecret);
    await this.otpService.sendOtpByEmail(body.email, otp);

    // Puedes almacenar userSecret en la base de datos para verificar más tarde

    return { success: true };
  }
  
}
