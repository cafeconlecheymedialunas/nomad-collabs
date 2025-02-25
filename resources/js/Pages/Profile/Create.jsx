// resources/js/Pages/User/Create.jsx
import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import UpdateFreelancerInformation from './partials/UpdateFreelancerInformation';
import DeleteUserForm from '../Account/Partials/DeleteUserForm';
import UpdatePasswordForm from '../Account/Partials/UpdatePasswordForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EducationForm from './partials/EducationForm';


const Create = ({user}) => {


    return (
        <AuthenticatedLayout
            user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Account</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateFreelancerInformation user={user}/>
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <EducationForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;