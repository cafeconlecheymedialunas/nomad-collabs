
import NotificationDropdown from '@/Components/NotificationDropdown';
import MessageNotifications from '@/Components/MessagesNotification';
import UserDropdownMenu from '@/Components/UserDropdownMenu';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import LogoutLink from '@/Components/LogoutLink';

export default function Header({onToggleSidebar,user,freelancer}){
    return (
        <header className="header-nav nav-innerpage-style menu-home4 dashboard_header main-menu">
        {/* Ace Responsive Menu */}
        <nav className="posr">
            <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
                <div className="row align-items-center justify-content-between">
                    <div className="col-6 col-lg-auto">
                        <div className="text-center text-lg-start d-flex align-items-center">
                            <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                                <a href="index.html" className="logo">
                                    <img src="https://creativelayers.net/themes/freeio-html/images/header-logo-dark.svg"  />
                                </a>
                            </div>
                            <div className="fz20 ml90">
                                <a href="#" className="dashboard_sidebar_toggle_icon vam" onClick={onToggleSidebar}>
                                    <img src="https://creativelayers.net/themes/freeio-html/images/dashboard-navicon.svg" />
                                </a>
                            </div>
                            <LogoutLink/>
                            <a className="login-info d-block d-xl-none ml40 vam" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span className="flaticon-loupe" /></a>
                            <div className="ml40 d-none d-xl-block">
                                <div className="search_area dashboard-style">
                                    <input type="text" className="form-control border-0" placeholder="What service are you looking for today?" />
                                    <label><span className="flaticon-loupe" /></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-auto">
                        <div className="text-center text-lg-end header_right_widgets">
                            <ul className="dashboard_dd_menu_list d-flex align-items-center justify-content-center justify-content-sm-end mb-0 p-0">
                                <li className="d-none d-sm-block">
                                    <MessageNotifications/>
                                </li>
                                <li className="d-none d-sm-block">
                                    <NotificationDropdown/>
                                </li>
                                <li className="user_setting">
                                    <UserDropdownMenu user={user} freelancer={freelancer}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}