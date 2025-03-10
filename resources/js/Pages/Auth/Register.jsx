import { useEffect } from 'react';
import AuthLayout from '@/Layouts/frontend/AuthenticatedFrontendLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SocialLogin from './SocialLogin';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <AuthLayout>
            <Head title='Register'/>
            <section className="our-register">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
                            <div className="main-title text-center">
                                <h2 className="title">Register</h2>
                                <p className="paragraph">Give your visitor a smooth online experience with a solid UX design</p>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInRight" data-wow-delay="300ms">
                        <div className="col-xl-6 mx-auto">
                            <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                                <div className="mb30">
                                    <h4>Let's create your account!</h4>
                                    <p className="text mt20">Already have an account? <Link href={route("login")} className="text-thm">Log In!</Link></p>
                                </div>
                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <InputLabel htmlFor="first_name" value="First Name" />
                                        <TextInput
                                            id="first_name"
                                            name="first_name"
                                            value={data.first_name}
                                            className="form-control"
                                            autoComplete="first_name"
                                            isFocused={true}
                                            onChange={(e) => setData('first_name', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.first_name} className="mt-2 text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <InputLabel htmlFor="last_name" value="Last Name" />
                                        <TextInput
                                            id="last_name"
                                            name="last_name"
                                            value={data.last_name}
                                            className="form-control"
                                            autoComplete="last_name"
                                            onChange={(e) => setData('last_name', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.last_name} className="mt-2 text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <InputLabel htmlFor="email" value="Email" />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control"
                                            autoComplete="username"
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.email} className="mt-2 text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <InputLabel htmlFor="password" value="Password" />
                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="form-control"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.password} className="mt-2 text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="form-control"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.password_confirmation} className="mt-2 text-danger" />
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <Link href={route('login')} className="text-decoration-none text-secondary small">
                                            Already registered?
                                        </Link>

                                        <PrimaryButton className="ms-3" disabled={processing}>
                                            Register
                                        </PrimaryButton>
                                    </div>
                                </form>
                                <div>
                                    <div className="hr_content mb20"><hr /><span className="hr_top_text">OR</span></div>
                                    <SocialLogin/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthLayout>
    );
}
