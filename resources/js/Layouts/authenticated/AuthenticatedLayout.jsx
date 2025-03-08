import { useEffect, useState } from 'react';

import Modal from '@/Components/Modal';
import Header from './Header';
import SearchModal from '../SearchModal';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Menu from '../Menu';
import { FaAngleUp } from 'react-icons/fa';

export default function Authenticated({ user, header, freelancer, children }) {
   
    const [sidebarOpened, setSidebarOpened] = useState(false);


    const toggleSidebar = () => {
        setSidebarOpened(prevState => !prevState);
    };


    return (

        <div>
            <div className="wrapper mm-page mm-slideout" id="mm-28">
                <div className="preloader" style={{ display: 'none' }} />
                {/* Main Header Nav */}
                <Header onToggleSidebar={toggleSidebar} user={user} freelancer={freelancer}/>
                {/* Search Modal */}
                <SearchModal />
                {/* Mobile Nav  */}
                <div id="page" className="mobilie_header_nav stylehome1">
                    <div className="mobile-menu">
                        <div className="header bdrb1">
                            <div className="menu_and_widgets">
                                <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                                    <a className="mobile_logo" href="#">
                                        <img src="https://creativelayers.net/themes/freeio-html/images/header-logo3.svg" />
                                    </a>
                                    <div className="right-side text-end">
                                        <a href="page-login.html">join</a>
                                        <a className="menubar ml30" href="#menu">
                                            <img src="https://creativelayers.net/themes/freeio-html/images/mobile-dark-nav-icon.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="posr"><div className="mobile_menu_close_btn"><span className="far fa-times" /></div></div>
                        </div>
                    </div>
                    {/* /.mobile-menu */}
                </div>
                <div className="dashboard_content_wrapper">
                    <div >

                        <Sidebar />
                        <div className="dashboard__main pl0-md">
                            <div className="dashboard__content hover-bgc-color">
                                {children}
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
                <a href="#" className="scrollToHome show" ><FaAngleUp /></a>
            </div>
            {/* Wrapper End */}
            {/* Custom script for all pages */}
            <Menu />
        </div>

    );
}
