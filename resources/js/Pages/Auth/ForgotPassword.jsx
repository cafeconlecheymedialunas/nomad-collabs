import AuthLayout from '@/Layouts/auth/AuthLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <AuthLayout>
            <Head title="Forgot Password" />
            <section className="our-register">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="main-title text-center">
                                <h2 className="title">Forgot Password?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 mx-auto">
                            <div className="log-reg-form search-modal form-style1 bg-white p-5 shadow-sm rounded">
                                <div className="mb-4">
                                    <div className="text-muted">
                                        Forgot your password? No problem. Just let us know your email address and we will email you a password
                                        reset link that will allow you to choose a new one.
                                    </div>
                                </div>

                                {status && (
                                    <div className="mb-4 text-success">{status}</div>
                                )}

                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control"
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        <InputError message={errors.email} className="mt-2 text-danger" />
                                    </div>

                                    <div className="d-flex justify-content-end mt-4">
                                        <PrimaryButton className="ms-3" disabled={processing}>
                                            Email Password Reset Link
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthLayout>
    );
}
