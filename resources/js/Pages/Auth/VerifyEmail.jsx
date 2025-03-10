import AuthLayout from '@/Layouts/frontend/AuthenticatedFrontendLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <AuthLayout>
            <Head title="Email Verification" />
            <section className="our-register">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="main-title text-center">
                                <h2 className="title">Verify your Email</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 mx-auto">
                            <div className="log-reg-form search-modal form-style1 bg-white p-5 shadow-sm rounded">
                                <div className="mb-4">
                                    <div className="mb-4 text-sm text-gray-600">
                                        Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                                        link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                                    </div>

                                    {status === 'verification-link-sent' && (
                                        <div className="mb-4 font-medium text-sm text-green-600">
                                            A new verification link has been sent to the email address you provided during registration.
                                        </div>
                                    )}
                                </div>


                                <form onSubmit={submit}>
                                    <div className="mt-4 flex items-center justify-between">
                                        <PrimaryButton disabled={processing}>Resend Verification Email</PrimaryButton>

                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Log Out
                                        </Link>
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
