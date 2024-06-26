import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TermsService {
    getTermsAndConditions(): string {
        const termsPath = path.join(__dirname, '../utils/terms.html'); // Ajusta la ruta según la estructura de tu proyecto
        try {
            const termsHtml = fs.readFileSync(termsPath, 'utf8');
            return termsHtml;
        } catch (err) {
            console.error(`Error al leer el archivo de términos y condiciones: ${err.message}`);
            return 'No se pudo cargar los términos y condiciones';
        }
    }
}



//import { TermsController } from '../controllers/terms.controller';
//TermsController,