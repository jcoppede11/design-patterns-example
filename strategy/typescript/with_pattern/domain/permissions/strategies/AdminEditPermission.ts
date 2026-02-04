/**
 * Estrategia concreta para la edición de permisos por parte de un administrador.
 */

import { EditPermissionStrategy } from './EditPermissionStrategy';

export class AdminEditPermission implements EditPermissionStrategy {
    canEdit(): boolean {
        return true;
    }
}
