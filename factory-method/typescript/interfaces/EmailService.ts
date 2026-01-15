/**
 * Define el contrato que deben cumplir todos los servicios de email.
 * 
 * Esta interfaz establece el comportamiento esperado para cualquier implementación
 * de un servicio de envío de emails, permitiendo cambiar entre diferentes proveedores
 * (Nodemailer, Resend, etc.) sin afectar el código cliente.
 * 
 * @interface EmailService
 *
 * Envía un email a través del proveedor configurado.
 * @param to - Dirección de correo electrónico del destinatario (ej: usuario@dominio.com)
 * @param subject - Asunto del email
 * @param body - Contenido del email en formato HTML
 * @returns Promise que se resuelve cuando el email se envía exitosamente
 * @throws Error si falla el envío del email
 */

export interface EmailService {
    sendEmail(to: string, subject: string, body: string): Promise<void>;
}
