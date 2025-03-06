import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import CoverImageUpload from '@/Components/CoverImageUpload'; // Importar el componente

export default function CreateFreelancer() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        state: '',
        city: '',
        post_code: '',
        address: '',
        nick_name: '',
        display_name: '',
        country_origin: '',
        country_residence: '',
        description: '',
        cover: null, // Aquí almacenamos la imagen seleccionada
    });

    // Función que se ejecuta cuando el usuario selecciona un archivo
    const handleCoverChange = (file) => {
        setData('cover', file);
    };

    const submitForm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('state', data.state);
        formData.append('city', data.city);
        formData.append('post_code', data.post_code);
        formData.append('address', data.address);
        formData.append('nick_name', data.nick_name);
        formData.append('display_name', data.display_name);
        formData.append('country_origin', data.country_origin);
        formData.append('country_residence', data.country_residence);
        formData.append('description', data.description);

        // Agregar la imagen de portada al FormData si se seleccionó
        if (data.cover) {
            formData.append('cover', data.cover);
        }

        // Enviar el formulario con la imagen y otros datos
        post(route('freelancer.store'), {
            data: formData,
            onSuccess: () => {
                // Manejar el éxito, redirigir o mostrar mensaje
            },
        });
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Register and Create Freelancer Profile</h2>
                        <p className="mt-1 text-sm text-gray-600">Complete your registration and profile details</p>
                    </header>
                    <form onSubmit={submitForm} className="grid grid-cols-2 gap-6">
                        {/* Cargar la imagen de portada */}
                        <div className="col-span-2">
                            <CoverImageUpload cover={data.cover} onChange={handleCoverChange} />
                        </div>

                        {/* Nombre */}
                        <div>
                            <InputLabel htmlFor="first_name" value="First Name" />
                            <TextInput
                                id="first_name"
                                name="first_name"
                                value={data.first_name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('first_name', e.target.value)}
                                required
                            />
                            <InputError message={errors.first_name} className="mt-2" />
                        </div>

                        {/* Apellido */}
                        <div>
                            <InputLabel htmlFor="last_name" value="Last Name" />
                            <TextInput
                                id="last_name"
                                name="last_name"
                                value={data.last_name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('last_name', e.target.value)}
                                required
                            />
                            <InputError message={errors.last_name} className="mt-2" />
                        </div>

                        {/* Estado */}
                        <div>
                            <InputLabel htmlFor="state" value="State" />
                            <TextInput
                                id="state"
                                name="state"
                                value={data.state}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('state', e.target.value)}
                                required
                            />
                            <InputError message={errors.state} className="mt-2" />
                        </div>

                        {/* Ciudad */}
                        <div>
                            <InputLabel htmlFor="city" value="City" />
                            <TextInput
                                id="city"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('city', e.target.value)}
                                required
                            />
                            <InputError message={errors.city} className="mt-2" />
                        </div>

                        {/* Código postal */}
                        <div>
                            <InputLabel htmlFor="post_code" value="Post Code" />
                            <TextInput
                                id="post_code"
                                name="post_code"
                                value={data.post_code}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('post_code', e.target.value)}
                                required
                            />
                            <InputError message={errors.post_code} className="mt-2" />
                        </div>

                        {/* Dirección */}
                        <div>
                            <InputLabel htmlFor="address" value="Address" />
                            <TextInput
                                id="address"
                                name="address"
                                value={data.address}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('address', e.target.value)}
                                required
                            />
                            <InputError message={errors.address} className="mt-2" />
                        </div>

                        {/* Nickname */}
                        <div>
                            <InputLabel htmlFor="nick_name" value="Nick Name" />
                            <TextInput
                                id="nick_name"
                                name="nick_name"
                                value={data.nick_name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('nick_name', e.target.value)}
                                required
                            />
                            <InputError message={errors.nick_name} className="mt-2" />
                        </div>

                        {/* Nombre para mostrar */}
                        <div>
                            <InputLabel htmlFor="display_name" value="Display Name" />
                            <TextInput
                                id="display_name"
                                name="display_name"
                                value={data.display_name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('display_name', e.target.value)}
                                required
                            />
                            <InputError message={errors.display_name} className="mt-2" />
                        </div>

                        {/* País de origen */}
                        <div>
                            <InputLabel htmlFor="country_origin" value="Country of Origin" />
                            <TextInput
                                id="country_origin"
                                name="country_origin"
                                value={data.country_origin}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('country_origin', e.target.value)}
                                required
                            />
                            <InputError message={errors.country_origin} className="mt-2" />
                        </div>

                        {/* País de residencia */}
                        <div>
                            <InputLabel htmlFor="country_residence" value="Country of Residence" />
                            <TextInput
                                id="country_residence"
                                name="country_residence"
                                value={data.country_residence}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('country_residence', e.target.value)}
                                required
                            />
                            <InputError message={errors.country_residence} className="mt-2" />
                        </div>

                        {/* Descripción */}
                        <div className="col-span-2">
                            <InputLabel htmlFor="description" value="Description" />
                            <TextArea
                                id="description"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </div>

                        {/* Botón de envío */}
                        <div className="col-span-2">
                            <PrimaryButton disabled={processing}>Register and Create Profile</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
