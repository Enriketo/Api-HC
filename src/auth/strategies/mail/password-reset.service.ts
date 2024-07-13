//import { Injectable, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
//import { UsersService } from '../../../services/users.service';
//import { EmployeesService } from '../../../services/employees.service';
//import { EmailService } from './email.service';
//import { randomBytes } from 'crypto';
//import * as bcrypt from 'bcrypt';
//
//@Injectable()
//export class PasswordResetService {
  //constructor(
    //private readonly usersService: UsersService,
    //private readonly employeesService: EmployeesService,
    //private readonly emailService: EmailService,
  //) {}
//
  //// Generate a random token
  //private generateRandomToken(length: number = 20): string {
    //return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
  //}
//
  //// Generate and send reset token
  //async generateResetToken(id: string, username: string, type: string): Promise<string> {
    //let user;
//
    //if (type === 'U') {
      //user = await this.usersService.findOne(username);
    //} else if (type === 'E') {
      //user = await this.employeesService.findOne(username);
    //} else {
      //throw new BadRequestException('Not a valid user type');
    //}
//
    //if (!user) {
      //throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    //}
//
    //const resetToken = this.generateRandomToken();
    //const resetTokenExpires = new Date();
    //resetTokenExpires.setHours(resetTokenExpires.getHours() + 1); // Token valid for 1 hour
//
    //user.resetToken = resetToken;
    //user.resetTokenExpires = resetTokenExpires;
//
    //if (type === 'U') {
      //await this.usersService.editUser(id, username);
    //} else if (type === 'E') {
      //await this.employeesService.editUser(id, username);
    //}
//
    //await this.sendResetPasswordEmail(user.email, resetToken);
//
    //return resetToken;
  //}
//
  //// Reset password
  //async resetPassword(token: string, newPassword: string): Promise<void> {
    //const user = await this.usersService.findOne({
      //where: {
        //resetToken: token,
        //resetTokenExpires: MoreThan(new Date()), // Ensure token has not expired
      //},
    //});
//
    //if (!user) {
      //throw new HttpException('Invalid or expired token', HttpStatus.BAD_REQUEST);
    //}
//
    //user.password = await bcrypt.hash(newPassword, 10);
    //user.resetToken = null;
    //user.resetTokenExpires = null;
//
    //await this.usersService.update(user);
  //}
//
  //// Send reset password email
  //private async sendResetPasswordEmail(email: string, token: string): Promise<void> {
    //const mailOptions = {
      //from: process.env.EMAIL_FROM,
      //to: email,
      //subject: 'Password Recovery',
      //text: `Hello,\n\nTo reset your password, please use this token: ${token}\n\nThe token is valid for 1 hour.`,
    //};
//
    //try {
      //await this.emailService.sendMail(mailOptions);
      //console.log('Password reset email sent to:', email);
    //} catch (error) {
      //console.error('Error sending password reset email:', error);
      //throw new HttpException('Error sending password reset email', HttpStatus.INTERNAL_SERVER_ERROR);
    //}
  //}
//}
