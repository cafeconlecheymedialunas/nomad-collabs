import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import AuthLayout from '@/Layouts/auth/AuthLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SocialLogin from './SocialLogin';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <AuthLayout>
            <Head title='Login'/>
            {status && <div className="mb-4 font-medium text-sm text-success">{status}</div>}
            <section className="our-login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                            <div className="main-title text-center">
                                <h2 className="title">Log In</h2>
                                <p className="paragraph">Give your visitor a smooth online experience with a solid UX design</p>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInRight" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInRight' }}>
                        <div className="col-xl-6 mx-auto">
                            <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                                <form onSubmit={submit}>
                                    
                                    <div className="mb-3">
                                        <InputLabel htmlFor="email" value="Email" />

                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />

                                        <InputError message={errors.email} className="text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <InputLabel htmlFor="password" value="Password" />

                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="form-control"
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                        />

                                        <InputError message={errors.password} className="text-danger" />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                            className="form-check-input"
                                        />
                                        <label className="form-check-label text-muted" htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="text-muted text-decoration-none"
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}

                                        <PrimaryButton className="btn btn-primary" disabled={processing}>
                                            Log in
                                        </PrimaryButton>
                                    </div>
                                </form>
                                <div className="hr_content mb20"><hr /><span className="hr_top_text">OR</span></div>
                                <SocialLogin/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </AuthLayout>
    );
}
