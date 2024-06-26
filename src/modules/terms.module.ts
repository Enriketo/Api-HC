import { Module } from '@nestjs/common';
import { TermsController } from '../controllers/terms.controller';
import { TermsService } from '../services/terms.service';

@Module({
    controllers: [TermsController],
    providers: [TermsService],
})
export class TermsModule {}
