import { Module } from '@nestjs/common';
import { OtpController } from '../controllers/otp.controller';
import { OtpService } from '../auth/strategies/mail/otp.service';
import { EmailService } from '../auth/strategies/mail/email.service'
import { UsersModule } from "../modules/users.module";
import { EmployeesModule } from "../modules/employees.module";

@Module({
    imports: [
        UsersModule, 
        EmployeesModule
    ],
    controllers: [OtpController],
    providers: [OtpService, EmailService],
})
export class OtpModule {}
