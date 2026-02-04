/**
 * Estrategia concreta para la edición de permisos por parte de un profesor.
 */

import { EditPermissionStrategy } from './EditPermissionStrategy';

export class TeacherEditPermission implements EditPermissionStrategy {
    canEdit(): boolean {
        return true;
    }
}
