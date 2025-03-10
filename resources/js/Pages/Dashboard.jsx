import AuthenticatedLayout from '@/Layouts/dashboard/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, freelancer }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            freelancer={freelancer}
            header={<h2 className="fw-semibold fs-4 text-dark">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-sm rounded">
                                <div className="card-body">
                                    <p className="text-dark">You're logged in!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
