import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/react';
import CoverImageUpload from '@/Components/CoverImageUpload';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Form, Col } from 'react-bootstrap';

export default function UpdateFreelancerForm({ className = '',freelancer }) {
    const { data, setData, post, put, errors, processing, recentlySuccessful } = useForm({
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
        video: freelancer?.video || '',
        cover: freelancer?.cover || '',
    });

    const handleCoverChange = (file) => {
        setData('cover', file);
    };

    const submit = (e) => {
        e.preventDefault();
        freelancer ? put(route('freelancer.update', freelancer.id)) : post(route('freelancer.store'));
    };

    // Array de campos con 'type' dinámico
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
        { id: 'video', label: 'Video Link', type: 'url' },
    ];

    return (
        <Form onSubmit={submit} className={`row g-3 ${className || ''}`}>
            <Form.Group as={Col} xs={12}>
                <CoverImageUpload cover={data.cover} onChange={handleCoverChange} />
            </Form.Group>

            {fields.map(({ id, label, type }) => (
                <Form.Group as={Col} md={6} key={id}>
                    <Form.Label htmlFor={id}>{label}</Form.Label>
                    <Form.Control
                        id={id}
                        type={type} // tipo dinámico
                        value={data[id]}
                        onChange={(e) => setData(id, e.target.value)}
                    />
                    <InputError message={errors[id]} />
                </Form.Group>
            ))}

            <Form.Group as={Col} xs={12}>
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control
                    as="textarea"
                    id="description"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    rows={4}
                    required
                />
                <InputError message={errors.description} />
            </Form.Group>

            <Form.Group as={Col} xs={12} className="d-flex align-items-center gap-3">
                <PrimaryButton disabled={processing}>
                    Save <FaArrowRightLong />
                </PrimaryButton>
                {recentlySuccessful && <p className="text-success">Saved.</p>}
            </Form.Group>
        </Form>
    );
}
