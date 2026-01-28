/**
 * Builder para construir objetos EmailPayload.
 * Este builder facilita la creación de payloads de email.
 */

import { EmailPayload } from "../interfaces/EmailPayload";

export class EmailPayloadBuilder {
    private payload: Partial<EmailPayload> = {};

    to(value: string): this {
        this.payload.to = value;
        return this;
    }

    subject(value: string): this {
        this.payload.subject = value;
        return this;
    }

    template(value: string): this {
        this.payload.template = value;
        return this;
    }

    dictionary(data: Record<string, unknown>): this {
        this.payload.dictionary = data;
        return this;
    }

    enableTracking(): this {
        this.payload.tracking = true;
        return this;
    }

    system(value: string): this {
        this.payload.system = value;
        return this;
    }

    build(): EmailPayload {
        if (!this.payload.to || !this.payload.subject || !this.payload.template) {
            throw new Error("Faltan campos para construir el payload del email.");
        }

        return this.payload as EmailPayload;
    }
}
