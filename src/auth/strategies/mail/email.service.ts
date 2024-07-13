import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', //llevar a variables de entorno
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'authenticate@hotcompanyweb.com',//llevar a variables de entorno
        pass: 'RG:o?dm>bd]oV}b%*iY5,4=btO88fV',//llevar a variables de entorno
      },
    });
  }

  async sendOtpEmail(to: string, otp: string): Promise<void> {
    await this.transporter.sendMail({
      from: 'authenticate@hotcompanyweb.com', //llevar a variables de entorno
      to: to,
      subject: 'Código OTP para autenticación',
      text: `Tu código OTP es: ${otp}`,
    });
  }

  //token otp para reestablecer contraseña
  async sendOtpEmail2(to: string, otp: string): Promise<void> {
    await this.transporter.sendMail({
      from: 'authenticate@hotcompanyweb.com', //llevar a variables de entorno
      to: to,
      subject: 'Código OTP para reestablecer contraseña',
      text: `Tu código OTP es: ${otp}`,
    });
  }
}
