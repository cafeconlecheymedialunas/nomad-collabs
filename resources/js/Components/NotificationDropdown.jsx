import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaRegMessage } from 'react-icons/fa6';

const NotificationDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic"   variant="link" >
                <FaRegMessage />
            </Dropdown.Toggle>

            <Dropdown.Menu className="px-3 py-4">
                <div className="dboard_notific_dd">
                    {/* First Notification */}
                    <div className="notif_list d-flex align-items-start border-bottom pb-3 mb-2">
                        <img className="img-2" src="https://creativelayers.net/themes/freeio-html/images/testimonials/testi-1.png" alt="Avatar" />
                        <div className="details ms-3">
                            <p className="dark-color fw-500 mb-2">Ali Tufan</p>
                            <p className="text mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            <p className="mb-0 text-thm">4 hours ago</p>
                        </div>
                    </div>

                    {/* Second Notification */}
                    <div className="notif_list d-flex align-items-start mb-3">
                        <img className="img-2" src="https://creativelayers.net/themes/freeio-html/images/testimonials/testi-2.png" alt="Avatar" />
                        <div className="details ms-3">
                            <p className="dark-color fw-500 mb-2">Ali Tufan</p>
                            <p className="text mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            <p className="mb-0 text-thm">4 hours ago</p>
                        </div>
                    </div>

                    <div className="d-grid">
                        <a href={route("dashboard")} className="ud-btn btn-thm w-100">
                            View All Messages <i className="fal fa-arrow-right-long" />
                        </a>
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default NotificationDropdown;
