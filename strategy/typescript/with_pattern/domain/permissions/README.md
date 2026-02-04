# Strategy Pattern - Permisos de Edición

Implementación del patrón Strategy para gestionar permisos de edición basados en roles de usuario.

## Problema que Resuelve

La necesidad de aplicar diferentes comportamientos según el rol del usuario, evitando el uso de `if/else` o `switch`, lo que viola el principio Open/Closed y dificulta el mantenimiento.


## Beneficios

### 1. **Principio Open/Closed (SOLID)**
   - Cerrado para modificación: el código existente no cambia
   - Abierto para extensión: agregar nuevos roles es simple

### 2. **Dominio Aislado de UI**
   - Lógica de negocio independiente del framework
   - Fácil migración entre tecnologías

### 3. **Código Reutilizable**
   - Mismo código funciona en frontend, backend o shared
   - Las estrategias pueden compartirse entre proyectos


## Uso

Ver [app.ts](../../app.ts).

```typescript
import { canEditContent } from './domain/permissions/canEditContent';

// Uso simple
const userRole = 'ADMIN';
if (canEditContent(userRole)) {
    // Mostrar botón de editar
}

// En React
const EditButton = ({ userRole }: { userRole: UserRole }) => {
    if (!canEditContent(userRole)) {
        return null;
    }
    return <Button>Editar</Button>;
}
```


## Cómo Extender

Para agregar un nuevo rol (ej: `MODERATOR`):

### 1. **Crear la estrategia:**
   ```typescript
   // strategies/ModeratorEditPermission.ts
   export class ModeratorEditPermission implements EditPermissionStrategy {
       canEdit(): boolean {
           return true; // lógica necesaria
       }
   }
   ```

### 2. **Registrarla:**
   ```typescript
   // editPermissionRegistry.ts
   export type UserRole = 'ADMIN' | 'STUDENT' | 'TEACHER' | 'MODERATOR';
   
   export const editPermissionRegistry: Record<UserRole, EditPermissionStrategy> = {
       // ... roles existentes
       MODERATOR: new ModeratorEditPermission(),
   };
   ```

### 3. **¡Listo!** No hay que modificar ningún otro archivo.


## ¿Cuándo usar este patrón?

✅ **Cuando usarlo:**
- Existen múltiples comportamientos
- Los comportamientos pueden cambiar en tiempo de ejecución
- Necesidad de testear cada comportamiento aisladamente
- Evitar condicionales complejos (if/else, switch)

❌ **cuando no usar:**
- Solo 2 opciones simples (un if/else es suficiente)
- Comportamientos simples y no cambiarán
