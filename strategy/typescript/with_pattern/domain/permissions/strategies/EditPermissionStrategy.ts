/**
 * Contrato que define la estrategia para la edición de permisos.
 */

export interface EditPermissionStrategy {
    canEdit(contentOwnerId?: string, currentUserId?: string): boolean;
}
