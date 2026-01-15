/**
 * Aplicación de ejemplo del patrón Factory Method.
 * 
 * Demuestra cómo usar el Factory Pattern para crear y utilizar servicios de email
 * de forma desacoplada. El tipo de proveedor se puede cambiar sin modificar
 * el código de la aplicación, solo configurando variables de entorno.
 */

import { EmailServiceFactory, EmailProvider } from '../../factories/EmailServiceFactory';

/**
 * Obtiene el proveedor de email desde variables de entorno.
 * Por defecto usa Nodemailer si no está especificado.
 * 
 * Valores válidos:
 * - 'nodemailer': Usa servidor SMTP
 * - 'resend': Usa API de Resend
 */
const provider = (process.env.EMAIL_PROVIDER as EmailProvider) || EmailProvider.Nodemailer;

/**
 * Crea una instancia del servicio de email usando el Factory Method.
 * El factory se encarga de instanciar la implementación correcta.
 */
const emailService = EmailServiceFactory.create(provider);

/**
 * Envía un email de ejemplo usando el servicio creado.
 * El código no conoce ni le importa qué proveedor está siendo usado.
 */
emailService.sendEmail(
    'juanc@example.com',
    'Bienvenido. Es un gusto tenerte con nosotros',
    '<h1>Gracias por registrarte</h1>'
);
