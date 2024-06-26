import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { TermsService } from '../services/terms.service';

@Controller('terms')
export class TermsController {
    constructor(private readonly termsService: TermsService) {}

    @Get()
    async getTermsAndConditions(@Res() res: Response): Promise<void> {
        const termsHtml = this.termsService.getTermsAndConditions();
        res.header('Content-Type', 'text/html');
        res.send(termsHtml);
    }
}