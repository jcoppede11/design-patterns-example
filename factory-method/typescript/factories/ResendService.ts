/**
 * Implementación del servicio de email usando Resend.
 * 
 * Este servicio utiliza la API REST de Resend para enviar emails.
 * Es ideal para:
 * - Aplicaciones modernas sin dependencia de SMTP
 * - Mejor entregabilidad y compliance
 * - Analytics y tracking de emails
 * - Escalabilidad sin gestión de servidores
 * - Entornos serverless y cloud-native
 */

import { EmailService } from '../interfaces/EmailService';
import { Resend } from 'resend';

export class ResendService implements EmailService {
    private resend = new Resend(process.env.RESEND_API_KEY!);

    async sendEmail(to: string, subject: string, body: string): Promise<void> {

        await this.resend.emails.send({
            from: 'Academy <noreply@develop.com>',
            to,
            subject,
            html: body,
        });
    }
}
