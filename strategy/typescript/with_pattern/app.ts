/**
 * Ejemplo de uso del patrón Strategy para permisos de edición
 * 
 * Este ejemplo demuestra cómo el patrón Strategy facilita la gestión de permisos
 * basados en roles de usuario de manera escalable y mantenible.
 */

import { canEditContent } from './domain/permissions/canEditContent';
import { UserRole } from './domain/permissions/editPermissionRegistry';

interface User {
    id: string;
    name: string;
    role: UserRole;
}

const users: User[] = [
    { id: '1', name: 'Juan Coppede', role: 'ADMIN' },
    { id: '2', name: 'María Mercado', role: 'TEACHER' },
    { id: '3', name: 'Pedro Lopez', role: 'STUDENT' },
];

// Simula la verificación de permisos de edición
const checkEditPermissions = () => {
    console.log('=== Verificando permisos de edición ===\n');

    users.forEach(user => {
        const hasPermission = canEditContent(user.role);

        console.log(`Usuario: ${user.name}`);
        console.log(`Rol: ${user.role}`);
        console.log(`Puede editar contenido: ${hasPermission ? 'Sí' : 'No'}`);
        console.log('---');
    });
}

const simulateAction = (user: User) => {
    console.log(`\n=== Acción de UI para ${user.name} ===`);

    if (canEditContent(user.role)) {
        console.log('✅ Se muestra el botón de editar');
        console.log('Tiene permiso para el botón de editar');
    } else {
        console.log('❌ No se muestra el botón de editar');
        console.log('No tiene permiso para el botón de editar');
    }
}

// Ejecución
checkEditPermissions();

console.log('\n=== Ejemplos de UI ===');
users.forEach(user => simulateAction(user));
