import React from 'react';

export default function ApplicationLogo({ src = "", className = "", alt = "",...props }) {
    return (
        // Asegúrate de proporcionar la ruta de la imagen en el atributo `src`
        <img src={src} alt={alt}
            {...props}

            className={
                ' ' +
                className
            }

        />
    );
}
