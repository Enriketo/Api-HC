import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import { EmailService } from './email.service'; // Importa el servicio de correo electrónico

@Injectable()
export class OtpService {
  constructor(private readonly emailService: EmailService) {}

  generateSecret(): string {
    const secret = speakeasy.generateSecret({ length: 20 });
    return secret.base32;
  }

  generateOtpCode(secret: string): string {
    const token = speakeasy.totp({
      secret: secret,
      encoding: 'base32'
    });
    return token;
  }

  verifyOtpCode(secret: string, otp: string): boolean {
    const isValid = speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: otp,
      window: 2  // El código OTP es válido durante un intervalo de tiempo de 2 * 30 segundos
    });
    return isValid;
  }

  generateOtpExpiry(minutes: number): Date {
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutes);
    return now;
  }

  async sendOtpByEmail(email: string, otp: string): Promise<void> {
    await this.emailService.sendOtpEmail(email, otp);
  }

}
