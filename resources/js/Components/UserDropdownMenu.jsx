import { Link } from '@inertiajs/react';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaHome, FaFileAlt, FaRegHeart, FaCommentAlt, FaStar, FaReceipt, FaDollarSign, FaRegNewspaper, FaTasks, FaBriefcase, FaProjectDiagram, FaUser, FaSignOutAlt } from 'react-icons/fa';
import LogoutLink from './LogoutLink';

const UserDropdownMenu = ({user,freelancer}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="link" id="user-dropdown" className="btn">
                <img src="https://creativelayers.net/themes/freeio-html/images/resource/user.png" alt="user.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <div className="user_setting_content">
                    <p className="fz15 fw400 ff-heading mt-4 ps-4">Account</p>
                    <Dropdown.Item href={route("dashboard")}>
                       <Link href={`/freelancer/${freelancer.id}/edit`}><FaUser className="mr-2" /> My Profile</Link> 
                    </Dropdown.Item>
                    <LogoutLink/>
                    <p className="fz15 fw400 ff-heading mb-2 ps-4">Start</p>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaHome className="mr-2" /> Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaFileAlt className="mr-2" /> My Proposals
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")} active>
                        <FaRegHeart className="mr-2" /> Saved
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaCommentAlt className="mr-2" /> Message
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaStar className="mr-2" /> Reviews
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaReceipt className="mr-2" /> Invoice
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaDollarSign className="mr-2" /> Payouts
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaRegNewspaper className="mr-2" /> Statements
                    </Dropdown.Item>

                    <p className="fz15 fw400 ff-heading mt-4 ps-4">Organize and Manage</p>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaTasks className="mr-2" /> Manage Services
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaBriefcase className="mr-2" /> Manage Jobs
                    </Dropdown.Item>
                    <Dropdown.Item href={route("dashboard")}>
                        <FaProjectDiagram className="mr-2" /> Manage Project
                    </Dropdown.Item>

                 
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default UserDropdownMenu;
