/**
 * Función que determina si un usuario con un rol específico tiene permiso para editar contenido.
 * 
 * Utiliza el registro de estrategias de edición de permisos para delegar la verificación
 * al objeto de estrategia correspondiente al rol del usuario.
 */

import { editPermissionRegistry, UserRole } from './editPermissionRegistry';

export const canEditContent = (role: UserRole): boolean => {
    return editPermissionRegistry[role].canEdit();
}
