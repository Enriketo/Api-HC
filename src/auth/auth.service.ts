import { Injectable, BadRequestException } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { EmployeesService } from "../services/employees.service";
//import { DataService } from "../controllers/data.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
//import { randomBytes } from "crypto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly employeesService: EmployeesService,
    private readonly jwtService: JwtService,
    //private readonly dataService: DataService,
  ) { }

  async validateUser(
    username: string,
    password: string,
    type: string
  ): Promise<any> {

    let user;
    if (type === "U") {
      user = await this.usersService.findOne(username);
    } else if (type === "E") {
      user = await this.employeesService.findOne(username);
    } else {
      throw new BadRequestException(`Not a valid type`);
    }

    const usr = user.shift();
    const isMatch = await bcrypt.compare(password, usr.password);
    if (usr && usr.username === username && isMatch) {
      const { password, ...result } = usr;
      return result;
    } else {
      throw new BadRequestException(`User or password invalid`);
    }
  }

  async login(usr: any) {
    const payload = usr;
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  //token for reset password
  //generateRandomToken(length: number = 20): string {
    //return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
  //}; 
  //async generateResetToken(
    //id: string,
    //username: string,
    //type: string
  //): Promise<any> {
    //const tp = type;
    //let user;
    //if (type === "U") {
      //user = await this.usersService.findOne(username);
    //} else if (type === "E") {
      //user = await this.employeesService.findOne(username);
    //} else {
      //throw new BadRequestException(`Not a valid type`);
    //}
//   
    //if (!user) {
      //throw new Error('No generado');
    //}
    //// Generar token y establecer fecha de expiración
    //const resetToken = this.generateRandomToken(); // Utiliza la función para generar el token
    //const resetTokenExpires = new Date();
    //resetTokenExpires.setHours(resetTokenExpires.getHours() + 1); // Ejemplo: token válido por 1 hora
//
    //// Actualizar usuario con el token y su fecha de expiración
    //if (tp === 'U'){
    //user.resetToken = resetToken;
    //user.resetTokenExpires = resetTokenExpires;
    //await this.usersService.editUser(id, username);
    //// Enviar correo electrónico con el token de restablecimiento
    //await this.sendResetPasswordEmail(user.email, resetToken)} ;
    //else if (tp === 'E'){
      //user.resetToken = resetToken;
    //user.resetTokenExpires = resetTokenExpires;
    //await this.usersService.editUser(id, username);
    //// Enviar correo electrónico con el token de restablecimiento
    //await this.sendResetPasswordEmail(user.email, resetToken)} ;
    //};
//    
    //return resetToken;
  //}
//
  ////Reset password
  //async resetPassword(token: string, newPassword: string): Promise<void> {
    //const user = await this.usersService.findOne({
      //where: {
        //resetToken: token,
        //resetTokenExpires: MoreThan(new Date()), // Verificar si el token no ha expirado
      //},
    //});
//
    //if (!user) {
      //throw new Error('Token no válido o ha expirado');
    //}
//
    //// Actualizar contraseña y limpiar token y fecha de expiración
    //user.password = newPassword; // Asegúrate de encriptar la contraseña antes de guardarla
    //user.resetToken = null;
    //user.resetTokenExpires = null;
    //await this.usersService.update(user);
  //}
//
  //private async sendResetPasswordEmail(email: string, token: string): Promise<void> {
    //const mailOptions = {
      //from: 'tu_correo@gmail.com',
      //to: email,
      //subject: 'Recuperación de Contraseña',
      //text: `Hola,\n\nPara restablecer tu contraseña, utiliza este token: ${token}`,
    //};
//
    //try {
      //await this.transporter.sendMail(mailOptions);
      //console.log('Correo de restablecimiento de contraseña enviado a:', email);
    //} catch (error) {
      //console.error('Error al enviar el correo de restablecimiento de contraseña:', error);
      //throw new Error('Error al enviar el correo de restablecimiento de contraseña');
    //}
//  }
//  }


















}
