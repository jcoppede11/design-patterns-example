/**
 * Aplicación de ejemplo del patrón Builder.
 * 
 * Demuestra cómo se construyen objetos complejos de forma
 * incremental y legible.
 */

import { EmailPayloadBuilder } from "./builders/EmailPayloadBuilder";

new EmailPayloadBuilder()
    .to("user@email.com")
    .subject("Bienvenido a ET Academy")
    .template("registration.html")
    .dictionary({ message: "Hola! Bienvenido a ET Academy." })
    .system("ET Academy")
    .enableTracking()
    .build();
