import React from 'react';
import { router, usePage } from '@inertiajs/react';
import UpdateFreelancerInformation from './partials/UpdateFreelancerInformation';
import DeleteUserForm from '../Account/Partials/DeleteUserForm';
import UpdatePasswordForm from '../Account/Partials/UpdatePasswordForm';
import AuthenticatedLayout from '@/Layouts/dashboard/AuthenticatedLayout';
import EducationForm from './partials/EducationForm';
import { FaRegTrashCan } from 'react-icons/fa6';
import JobExperienceForm from './partials/JobExperienceForm';
import SkillLevelForm from './partials/SkillLevelForm';

const Edit = ({freelancer,skills}) => {

    
    return (
        <AuthenticatedLayout
            user={freelancer.user}
            freelancer={freelancer}
            header={<h2 className="text-center text-primary">Account</h2>}
        >
            <div>
                <div className="row pb40">
                    <div className="col-lg-9">
                        <div className="dashboard_title_area">
                            <h2>My Profile</h2>
                            <p className="text">Complete your Freelance Profile</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                            <div className="bdrb1 pb15 mb25">
                                <h5 className="list-title">Profile Details</h5>
                            </div>
                            <div className="col-12">
                                <UpdateFreelancerInformation freelancer={freelancer} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">           
                            <EducationForm freelancer={freelancer} />        
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">           
                            <JobExperienceForm freelancer={freelancer} />        
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">           
                            <SkillLevelForm freelancer={freelancer} skills={skills}/>        
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
