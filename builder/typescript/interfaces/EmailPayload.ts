/**
 * Define el contrato para un payload de email.
 * 
 * Asegura que cualquier objeto que lo implemente
 * contenga la información necesaria para enviar un email.
 * 
 * @interface EmailPayload
 * 
 * @property {string} to - Dirección de correo electrónico del destinatario.
 * @property {string} subject - Asunto del correo electrónico.
 * @property {string} template - Nombre o identificador de la plantilla de correo electrónico a utilizar.
 * 
 * @property {Record<string, unknown>} [dictionary] - Diccionario opcional para reemplazar variables en la plantilla.
 * @property {boolean} [tracking] - Indica si se debe habilitar el seguimiento del correo electrónico.
 * @property {string} [system] - Identificador opcional del sistema desde el cual se envía el correo.
 */

export interface EmailPayload {
    to: string;
    subject: string;
    template: string;

    dictionary?: Record<string, unknown>;
    tracking?: boolean;
    system?: string;
}
