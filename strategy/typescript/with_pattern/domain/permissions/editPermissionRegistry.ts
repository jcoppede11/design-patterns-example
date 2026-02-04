/**
 * Registry: map correspondiente a las estrategias de edición de permisos según el rol del usuario.
 * Cada rol de usuario (ADMIN, STUDENT, TEACHER) está asociado a su respectiva estrategia de edición de permisos.
 * 
 * Este patrón permite seleccionar dinámicamente la estrategia adecuada en tiempo de ejecución
 * basándose en el rol del usuario, facilitando la gestión y extensión de las estrategias de edición de permisos.
 */

import { AdminEditPermission } from './strategies/AdminEditPermission';
import { TeacherEditPermission } from './strategies/TeacherEditPermission';
import { StudentEditPermission } from './strategies/StudentEditPermission';
import { EditPermissionStrategy } from './strategies/EditPermissionStrategy';

export type UserRole = 'ADMIN' | 'STUDENT' | 'TEACHER';

export const editPermissionRegistry: Record<UserRole, EditPermissionStrategy> = {
    ADMIN: new AdminEditPermission(),
    STUDENT: new StudentEditPermission(),
    TEACHER: new TeacherEditPermission()
};
