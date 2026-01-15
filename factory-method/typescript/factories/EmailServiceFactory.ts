import { EmailService } from '../interfaces/EmailService';
import { NodemailerService } from './NodemailerService';
import { ResendService } from './ResendService';

/**
 * Enumeración de proveedores de email soportados.
 * 
 * Define los proveedores disponibles para envío de emails en la aplicación.
 * Al agregar un nuevo proveedor, es necesario:
 * 1. Agregarlo a este enum
 * 2. Crear la clase implementadora en este directorio
 * 3. Agregar un nuevo caso en el método `create()` del factory
 * 
 * @enum {string}
 */
export enum EmailProvider {
    Nodemailer = 'nodemailer',
    Resend = 'resend',
}

/**
 * Factory Method para crear instancias de servicios de email.
 * 
 * El patrón Factory Method centraliza la lógica de creación
 * de diferentes tipos de servicios de email. Esto permite:
 * - Cambiar fácilmente entre proveedores sin modificar el código cliente
 * - Encapsular la lógica de instanciación
 * - Facilitar testing mediante inyección de dependencias
 */

export class EmailServiceFactory {
    static create(provider: EmailProvider): EmailService {

        switch (provider) {
            case EmailProvider.Nodemailer:
                return new NodemailerService();

            case EmailProvider.Resend:
                return new ResendService();

            default:
                throw new Error(`Email provider ${provider} is not supported`);
        }
    }
}
