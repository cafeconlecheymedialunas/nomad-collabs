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
import MediaGalleryUpload from '../../Components/MediaGalleryUpload/MediaGalleryUpload';

const Edit = ({ freelancer, skills }) => {


    const { auth, errors } = usePage().props

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
                                <h5 className="list-title">Cover Image</h5>
                            </div>
                            <div className="col-12">



                                <div className="profile-box d-sm-flex align-items-center mb30">
                                    <div className="profile-img mb20-sm">
                                        <img className="rounded-circle object-fit-cover" style={{objectPosition:"center center"}} src={freelancer?.cover[0]?.image_url ?? "/assets/img/default-avatar.png"} width={100} height={100} alt="" />
                                    </div>
                                    <div className="profile-content ml20 ml0-xs">
                                        <div className="d-flex align-items-center my-3">
                                            <MediaGalleryUpload
                                                relatedEntityType={"Freelancer"}
                                                relatedEntityId={freelancer.id}
                                                errors={errors}
                                                freelancer={freelancer}
                                                files={freelancer.user.files}
                                                fileMimeType={["image"]}
                                            />
                                        </div>
                                        <p className="text mb-0">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png</p>
                                    </div>
                                </div>
                            </div>
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


                                <UpdateFreelancerInformation errors={errors} freelancer={freelancer} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                            <EducationForm errors={errors} freelancer={freelancer} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                            <JobExperienceForm errors={errors} freelancer={freelancer} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                            <SkillLevelForm errors={errors} freelancer={freelancer} skills={skills} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
