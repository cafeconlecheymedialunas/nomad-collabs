import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Form, Col } from 'react-bootstrap';
import CoverImageUpload from '@/Components/CoverImageUpload';
import MediaGalleryUpload from '../../../Components/MediaGalleryUpload/MediaGalleryUpload';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function UpdateFreelancerForm({ auth,className = '', freelancer }) {
    // Usar useState para manejar el estado del formulario
    
    
   
    const { data, setData, put, delete: destroy, errors, processing } = useForm({
        user_id: freelancer?.user.id,
        first_name: freelancer?.first_name || '',
        last_name: freelancer?.last_name || '',
        state: freelancer?.state || '',
        city: freelancer?.city || '',
        post_code: freelancer?.post_code || '',
        address: freelancer?.address || '',
        nick_name: freelancer?.nick_name || '',
        description: freelancer?.description || '',
        display_name: freelancer?.display_name || '',
        country_origin: freelancer?.country_origin || '',
        country_residence: freelancer?.country_residence || '',
    });

    // Handler para cambiar la imagen de portada (Cover)


    // Función que se ejecuta cuando el formulario se envía
    const submit = (e) => {
        e.preventDefault();

        // Crear un objeto FormData para enviar los datos y archivos
        const formData = new FormData();

        // Añadir los datos del formulario (normales y archivos)
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        // Usamos router.put() para hacer la solicitud PUT
        put(route("freelancer.update", { freelancer: freelancer.id }), {
            data: formData,
            preserveScroll: true,  // Mantener el scroll después de la solicitud
            onSuccess: () => {

                console.log("Form submitted successfully");
            },
            onError: (error) => {
                // Manejo de errores, ya los estamos obteniendo en `errors` de la página
                console.log("Error", error);
            }
        });
    };

    // Campos del formulario (como array de objetos)
    const fields = [
        { id: 'first_name', label: 'First Name', type: 'text' },
        { id: 'last_name', label: 'Last Name', type: 'text' },
        { id: 'state', label: 'State', type: 'text' },
        { id: 'city', label: 'City', type: 'text' },
        { id: 'post_code', label: 'Post Code', type: 'text' },
        { id: 'address', label: 'Address', type: 'text' },
        { id: 'nick_name', label: 'Nick Name', type: 'text' },
        { id: 'display_name', label: 'Display Name', type: 'text' },
        { id: 'country_origin', label: 'Country of Origin', type: 'text' },
        { id: 'country_residence', label: 'Country of Residence', type: 'text' },
        { id: 'account_active', label: 'Actived?', type: 'checkboxes' },
    ];

    

    return (
        <>
  
        <Form onSubmit={submit} className={`row g-3 ${className || ''}`}>
           
           
           
            {/* Campos dinámicos */}
            {fields.map(({ id, label, type }) => (
                <Form.Group as={Col} md={6} key={id}>
                    <Form.Label htmlFor={id}>{label}</Form.Label>
                    <Form.Control
                        id={id}
                        type={type} // tipo dinámico
                        value={data[id]}
                        onChange={(e) => setData({ ...data, [id]: e.target.value })}
                    />
                    <InputError message={errors[id]} />
                </Form.Group>
            ))}

            {/* Campo de descripción */}
            <Form.Group as={Col} xs={12}>
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control
                    as="textarea"
                    id="description"
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    rows={4}
                    required
                />
                <InputError message={errors.description} />
            </Form.Group>

            {/* Botón de guardar */}
            <Form.Group as={Col} xs={12} className="d-flex align-items-center gap-3">
                <PrimaryButton disabled={processing}>
                    Save <FaArrowRightLong />
                </PrimaryButton>
            </Form.Group>
        </Form>
       
        </>
    );
}
