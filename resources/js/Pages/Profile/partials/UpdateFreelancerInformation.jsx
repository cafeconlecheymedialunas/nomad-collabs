import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea'; // Asume que tienes un componente TextArea
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateFreelancerForm({ className = '', user, freelancer  }) {
    const { data, setData, post, put, errors, processing, recentlySuccessful } = useForm({
        user_id: user.id,
        first_name: freelancer ? freelancer.first_name : '',
        last_name: freelancer ? freelancer.last_name : '',
        state: freelancer ? freelancer.state : '',
        city: freelancer ? freelancer.city : '',
        post_code: freelancer ? freelancer.post_code : '',
        address: freelancer ? freelancer.address : '',
        nick_name: freelancer ? freelancer.nick_name : '',
        description: freelancer ? freelancer.description : '',
        display_name: freelancer ? freelancer.display_name : '',
        country_origin: freelancer ? freelancer.country_origin : '',
        country_residence: freelancer ? freelancer.country_residence : '',
        video: freelancer ? freelancer.video : '',
        cover: freelancer ? freelancer.cover : '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (freelancer) {
            
            put(route('freelancer.update', freelancer.id));
        } else {
            // Si no existe, créalo
            post(route('freelancer.store'));
        }
    };

    return (

        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Freelancer Profile</h2>

                <p className="mt-1 text-sm text-gray-600">
                Create a profile 
                </p>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">


                {/* First Name */}
                <div>
                    <InputLabel htmlFor="first_name" value="First Name" />
                    <TextInput
                        id="first_name"
                        className="mt-1 block w-full"
                        value={data.first_name}
                        onChange={(e) => setData('first_name', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.first_name} />
                </div>

                {/* Last Name */}
                <div>
                    <InputLabel htmlFor="last_name" value="Last Name" />
                    <TextInput
                        id="last_name"
                        className="mt-1 block w-full"
                        value={data.last_name}
                        onChange={(e) => setData('last_name', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.last_name} />
                </div>

                {/* State */}
                <div>
                    <InputLabel htmlFor="state" value="State" />
                    <TextInput
                        id="state"
                        className="mt-1 block w-full"
                        value={data.state}
                        onChange={(e) => setData('state', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.state} />
                </div>

                {/* City */}
                <div>
                    <InputLabel htmlFor="city" value="City" />
                    <TextInput
                        id="city"
                        className="mt-1 block w-full"
                        value={data.city}
                        onChange={(e) => setData('city', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.city} />
                </div>

                {/* Post Code */}
                <div>
                    <InputLabel htmlFor="post_code" value="Post Code" />
                    <TextInput
                        id="post_code"
                        className="mt-1 block w-full"
                        value={data.post_code}
                        onChange={(e) => setData('post_code', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.post_code} />
                </div>

                {/* Address */}
                <div>
                    <InputLabel htmlFor="address" value="Address" />
                    <TextInput
                        id="address"
                        className="mt-1 block w-full"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.address} />
                </div>

                {/* Nick Name */}
                <div>
                    <InputLabel htmlFor="nick_name" value="Nick Name" />
                    <TextInput
                        id="nick_name"
                        className="mt-1 block w-full"
                        value={data.nick_name}
                        onChange={(e) => setData('nick_name', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.nick_name} />
                </div>

                {/* Description (Textarea) */}
                <div>
                    <InputLabel htmlFor="description" value="Description" />
                    <TextArea
                        id="description"
                        className="mt-1 block w-full"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                        rows={4} // Número de filas para el textarea
                    />
                    <InputError className="mt-2" message={errors.description} />
                </div>

                {/* Display Name */}
                <div>
                    <InputLabel htmlFor="display_name" value="Display Name" />
                    <TextInput
                        id="display_name"
                        className="mt-1 block w-full"
                        value={data.display_name}
                        onChange={(e) => setData('display_name', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.display_name} />
                </div>

                {/* Country Origin */}
                <div>
                    <InputLabel htmlFor="country_origin" value="Country of Origin" />
                    <TextInput
                        id="country_origin"
                        className="mt-1 block w-full"
                        value={data.country_origin}
                        onChange={(e) => setData('country_origin', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.country_origin} />
                </div>

                {/* Country Residence */}
                <div>
                    <InputLabel htmlFor="country_residence" value="Country of Residence" />
                    <TextInput
                        id="country_residence"
                        className="mt-1 block w-full"
                        value={data.country_residence}
                        onChange={(e) => setData('country_residence', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.country_residence} />
                </div>

                {/* Video */}
                <div>
                    <InputLabel htmlFor="video" value="Video Link" />
                    <TextInput
                        id="video"
                        className="mt-1 block w-full"
                        value={data.video}
                        onChange={(e) => setData('video', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.video} />
                </div>

                {/* Cover Image */}
                <div>
                    <InputLabel htmlFor="cover" value="Cover Image URL" />
                    <TextInput
                        id="cover"
                        className="mt-1 block w-full"
                        value={data.cover}
                        onChange={(e) => setData('cover', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.cover} />
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>

        </section>
    );
}