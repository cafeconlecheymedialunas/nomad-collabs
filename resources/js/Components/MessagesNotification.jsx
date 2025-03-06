import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaRegBell } from 'react-icons/fa';

const MessageNotifications = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle 
                variant="link" 
                className="text-center mr-5 text-thm2 dropdown-toggle fz20"
                id="message-notifications-dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <FaRegBell />
            </Dropdown.Toggle>

            <Dropdown.Menu className="px-3 pt-2 pb-3">
                <div className="dboard_notific_dd">
                    {/* Notification 1 */}
                    <div className="notif_list d-flex align-items-center border-bottom pb-3 mb-2">
                        <img 
                            src="https://creativelayers.net/themes/freeio-html/images/resource/notif-1.png" 
                            alt="Notification 1" 
                            className="img-fluid" 
                        />
                        <div className="details ms-3">
                            <p className="text mb-0">Your resume</p>
                            <p className="text mb-0">updated!</p>
                        </div>
                    </div>

                    {/* Notification 2 */}
                    <div className="notif_list d-flex align-items-center border-bottom pb-3 mb-2">
                        <img 
                            src="https://creativelayers.net/themes/freeio-html/images/resource/notif-2.png" 
                            alt="Notification 2" 
                            className="img-fluid" 
                        />
                        <div className="details ms-3">
                            <p className="text mb-0">You changed</p>
                            <p className="text mb-0">password</p>
                        </div>
                    </div>

                    {/* Notification 3 */}
                    <div className="notif_list d-flex align-items-center border-bottom pb-3 mb-2">
                        <img 
                            src="https://creativelayers.net/themes/freeio-html/images/resource/notif-3.png" 
                            alt="Notification 3" 
                            className="img-fluid" 
                        />
                        <div className="details ms-3">
                            <p className="text mb-0">Your account has been</p>
                            <p className="text mb-0">created successfully</p>
                        </div>
                    </div>

                    {/* Notification 4 */}
                    <div className="notif_list d-flex align-items-center border-bottom pb-3 mb-2">
                        <img 
                            src="https://creativelayers.net/themes/freeio-html/images/resource/notif-4.png" 
                            alt="Notification 4" 
                            className="img-fluid" 
                        />
                        <div className="details ms-3">
                            <p className="text mb-0">You applied for a job</p>
                            <p className="text mb-0">Front-end Developer</p>
                        </div>
                    </div>

                    {/* Notification 5 */}
                    <div className="notif_list d-flex align-items-center">
                        <img 
                            src="https://creativelayers.net/themes/freeio-html/images/resource/notif-5.png" 
                            alt="Notification 5" 
                            className="img-fluid" 
                        />
                        <div className="details ms-3">
                            <p className="text mb-0">Your course uploaded</p>
                            <p className="text mb-0">successfully</p>
                        </div>
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MessageNotifications;
