/**
 * Implementación del servicio de email usando Nodemailer.
 * 
 * Este servicio utiliza Nodemailer para enviar emails a través de servidores SMTP.
 * Es ideal para:
 * - Servidores propios o terceros con acceso SMTP
 * - Bajo costo operativo
 * - Control total sobre la configuración del servidor
 * - Entornos on-premise
 */

import { EmailService } from '../interfaces/EmailService';
import nodemailer from 'nodemailer';

export class NodemailerService implements EmailService {
    private transporter = nodemailer.createTransport({
        pool: true,
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

    async sendEmail(to: string, subject: string, body: string): Promise<void> {
        
        await this.transporter.sendMail({
            from: 'Academy <noreply@develop.com>',
            to,
            subject,
            html: body,
        });
    }
}
