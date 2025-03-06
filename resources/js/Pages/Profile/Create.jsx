import { useEffect } from 'react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import { Head, useForm } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
export default function RegisterAndCreateFreelancer() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        first_name: '',
        last_name: '',
        state: '',
        city: '',
        post_code: '',
        address: '',
        nick_name: '',
        description: '',
        display_name: '',
        country_origin: '',
        country_residence: '',
        video: '',
        cover: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        post(route('register-and-create-freelancer'), {
            data: { ...data },
            onSuccess: () => {
                // Puedes redirigir o realizar otra acción si es necesario
            },
        });
    };

    return (
        <FrontLayout>
            <Head title="Register" />
            <Head title="Register and Create Freelancer Profile" />

            <form onSubmit={submitForm}>
                <header>
                    <h2 className="text-lg font-medium text-gray-900">Register and Create Freelancer Profile</h2>
                    <p className="mt-1 text-sm text-gray-600">Complete your registration and profile details</p>
                </header>

                {/* Campos de Registro */}
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                {/* Campos Freelancer */}
                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
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

                <div className="mt-4">
                    <PrimaryButton processing={processing}>Register and Create Profile</PrimaryButton>
                </div>
            </form>
        </FrontLayout>
    );
}
