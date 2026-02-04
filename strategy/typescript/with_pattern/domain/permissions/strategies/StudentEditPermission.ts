/**
 * Estrategia concreta para la edición de permisos por parte de un estudiante.
 */

import { EditPermissionStrategy } from './EditPermissionStrategy';

export class StudentEditPermission implements EditPermissionStrategy {
    canEdit(): boolean {
        return false;
    }
}
