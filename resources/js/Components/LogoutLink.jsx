
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { router, usePage } from '@inertiajs/react';

export default function LogoutLink() {
    // Obtener el usuario autenticado desde las props de Inertia
    const { auth } = usePage().props;

    const handleLogout = (e) => {
        e.preventDefault();
        // Enviar solicitud de logout a la ruta /logout
        router.post(route('logout'));
    };

    return (
        <>
            {auth.user && (
                 <button onClick={handleLogout} data-rr-ui-dropdown-item className="dropdown-item">
                    <FaSignOutAlt className="mr-2" /> 
                    Logout
                </button>
            )}
        </>
       

    );
}
