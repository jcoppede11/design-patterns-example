/**
 * NO recomendado, no escale
 * 
 * Cada nuevo rol obliga a modificar esta función.
 * Difícil de testear por comportamiento.
 */

export type UserRole = 'ADMIN' | 'STUDENT' | 'TEACHER';

export const canEditContent = (role: UserRole): boolean => {
    if (role === 'ADMIN') {
        return true;
    }

    if (role === 'STUDENT') {
        return true;
    }

    if (role === 'TEACHER') {
        return false;
    }

    return false;
}
