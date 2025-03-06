import { Link } from '@inertiajs/react';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaHome, FaFileAlt, FaRegHeart, FaCommentAlt, FaStar, FaReceipt, FaDollarSign, FaRegNewspaper, FaTasks, FaBriefcase, FaProjectDiagram, FaUser, FaSignOutAlt } from 'react-icons/fa';

const UserDropdownMenu = ({user,freelancer}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="link" id="user-dropdown" className="btn">
                <img src="https://creativelayers.net/themes/freeio-html/images/resource/user.png" alt="user.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <div className="user_setting_content">
                    <p className="fz15 fw400 ff-heading mt-4 ps-4">Account</p>
                    <Dropdown.Item href="page-dashboard-profile.html">
                       <Link href={`/freelancer/${freelancer.id}/edit`}><FaUser className="mr-2" /> My Profile</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item href="page-login.html">
                        <FaSignOutAlt className="mr-2" /> Logout
                    </Dropdown.Item>
                    <p className="fz15 fw400 ff-heading mb-2 ps-4">Start</p>
                    <Dropdown.Item href="page-dashboard.html">
                        <FaHome className="mr-2" /> Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-proposal.html">
                        <FaFileAlt className="mr-2" /> My Proposals
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-save.html" active>
                        <FaRegHeart className="mr-2" /> Saved
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-message.html">
                        <FaCommentAlt className="mr-2" /> Message
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-reviews.html">
                        <FaStar className="mr-2" /> Reviews
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-invoice.html">
                        <FaReceipt className="mr-2" /> Invoice
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-payouts.html">
                        <FaDollarSign className="mr-2" /> Payouts
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-statement.html">
                        <FaRegNewspaper className="mr-2" /> Statements
                    </Dropdown.Item>

                    <p className="fz15 fw400 ff-heading mt-4 ps-4">Organize and Manage</p>
                    <Dropdown.Item href="page-dashboard-manage-service.html">
                        <FaTasks className="mr-2" /> Manage Services
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-manage-jobs.html">
                        <FaBriefcase className="mr-2" /> Manage Jobs
                    </Dropdown.Item>
                    <Dropdown.Item href="page-dashboard-favorites.html">
                        <FaProjectDiagram className="mr-2" /> Manage Project
                    </Dropdown.Item>

                 
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default UserDropdownMenu;
