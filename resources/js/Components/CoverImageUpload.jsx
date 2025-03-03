import { useState, useEffect, useRef } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';

export default function CoverImageUpload({ cover, onChange }) {
    const [preview, setPreview] = useState(cover ? cover : '/assets/img/default-avatar.png');
    const fileInputRef = useRef(null);

    useEffect(() => {
        return () => {
            if (preview && preview.startsWith('blob:')) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            onChange(file);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click(); // Simula clic en el input oculto
    };

    return (
        <div className="profile-box d-sm-flex align-items-center mb30">
            {/* Imagen de perfil */}
            <div className="profile-img mb20-sm">
                <img className="rounded-circle wa-xs object-fit-cover " width={100} height={100} src={preview} alt="Cover" />
            </div>

            {/* Contenido de perfil */}
            <div className="profile-content ml20 ml0-xs">
                <div className="d-flex align-items-center my-3">
                    {/* Botón para eliminar imagen */}
                    <button
                        type="button"
                        className="tag-delt text-thm2"
                        onClick={() => {
                            setPreview('https://creativelayers.net/themes/freeio-html/images/team/fl-1.png');
                            onChange(null);
                        }}
                    >
                        <FaRegTrashCan />
                    </button>

                    {/* Botón para cargar imagen */}
                    <button type="button" className="upload-btn ml10 cursor-pointer" onClick={handleUploadClick}>
                        Upload Images
                    </button>
                    
                    {/* Input de archivo oculto */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        className="d-none"
                        onChange={handleFileChange}
                    />
                </div>

                {/* Reglas del archivo */}
                <p className="text mb-0 text-gray-500">
                    Max file size is 1MB, Minimum dimension: 330x300, and Suitable files are .jpg & .png
                </p>
            </div>
        </div>
    );
}
