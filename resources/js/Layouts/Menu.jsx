export default function Menu() {
    return (
        <>
            <nav id="menu" className="mm-menu mm-menu--offcanvas mm-menu--position-left-front mm-menu--theme-light" aria-label="Menu" aria-modal="true" role="dialog" inert="true">
                <div className="mm-panels"><div className="mm-panel mm-panel--noanimation mm-panel--opened" id="mm-1"><div className="mm-navbar"><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true"><span>Menu</span></a></div><ul className="mm-listview">
                    <li className="mm-listitem" id="mm-2" data-mm-child="mm-3">
                        <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-3">Home</a>
                    </li>
                    <li className="mm-listitem" id="mm-4" data-mm-child="mm-5">
                        <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-5">Browse Jobs</a>
                    </li>
                    <li className="mm-listitem" id="mm-12" data-mm-child="mm-13">
                        <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-13">Users</a>
                    </li>
                    <li className="mm-listitem" id="mm-20" data-mm-child="mm-21">
                        <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-21">Pages</a>
                    </li>
                    <li className="mm-listitem" id="mm-26" data-mm-child="mm-27">
                        <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-27">Blog</a>
                    </li>
                    {/* Only for Mobile View */}
                </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-3" data-mm-parent="mm-2" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-1" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-1"><span>Home</span></a></div><ul className="mm-listview">
                    <li className="mm-listitem"><a href="index.html" className="mm-listitem__text">Home V1</a></li>
                    <li className="mm-listitem"><a href="index2.html" className="mm-listitem__text">Home V2</a></li>
                    <li className="mm-listitem"><a href="index3.html" className="mm-listitem__text">Home V3</a></li>
                    <li className="mm-listitem"><a href="index4.html" className="mm-listitem__text">Home V4</a></li>
                    <li className="mm-listitem"><a href="index5.html" className="mm-listitem__text">Home V5</a></li>
                    <li className="mm-listitem"><a href="index6.html" className="mm-listitem__text">Home V6</a></li>
                    <li className="mm-listitem"><a href="index7.html" className="mm-listitem__text">Home V7</a></li>
                    <li className="mm-listitem"><a href="index8.html" className="mm-listitem__text">Home V8</a></li>
                    <li className="mm-listitem"><a href="index9.html" className="mm-listitem__text">Home V9</a></li>
                    <li className="mm-listitem"><a href="index10.html" className="mm-listitem__text">Home V10</a></li>
                    <li className="mm-listitem"><a href="index11.html" className="mm-listitem__text">Home V11</a></li>
                    <li className="mm-listitem"><a href="index12.html" className="mm-listitem__text">Home V12</a></li>
                    <li className="mm-listitem"><a href="index13.html" className="mm-listitem__text">Home V13</a></li>
                    <li className="mm-listitem"><a href="index14.html" className="mm-listitem__text">Home V14</a></li>
                    <li className="mm-listitem"><a href="index15.html" className="mm-listitem__text">Home V15</a></li>
                    <li className="mm-listitem"><a href="index16.html" className="mm-listitem__text">Home V16</a></li>
                    <li className="mm-listitem"><a href="index17.html" className="mm-listitem__text">Home V17</a></li>
                    <li className="mm-listitem"><a href="index18.html" className="mm-listitem__text">Home V18</a></li>
                    <li className="mm-listitem"><a href="index19.html" className="mm-listitem__text">Home V19</a></li>
                    <li className="mm-listitem"><a href="index20.html" className="mm-listitem__text">Home V20</a></li>
                </ul>
                    </div>
                    <div className="mm-panel mm-panel--noanimation" id="mm-5" data-mm-parent="mm-4" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-1" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-1"><span>Browse Jobs</span></a></div><ul className="mm-listview">
                        <li className="mm-listitem" id="mm-6" data-mm-child="mm-7">
                            <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-7">Services</a>
                        </li>
                        <li className="mm-listitem" id="mm-8" data-mm-child="mm-9">
                            <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-9">Projects</a>
                        </li>
                        <li className="mm-listitem" id="mm-10" data-mm-child="mm-11">
                            <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-11">Job View</a>
                        </li>
                    </ul>
                    </div>
                    <div className="mm-panel mm-panel--noanimation" id="mm-7" data-mm-parent="mm-6" inert="true">
                        <div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-5" aria-label="Close submenu" />
                            <a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-5"><span>Services</span></a>
                        </div>
                        <ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-service-v1.html" className="mm-listitem__text">Service v1</a></li>
                            <li className="mm-listitem"><a href="page-service-v2.html" className="mm-listitem__text">Service v2</a></li>
                            <li className="mm-listitem"><a href="page-service-v3.html" className="mm-listitem__text">Service v3</a></li>
                            <li className="mm-listitem"><a href="page-service-v4.html" className="mm-listitem__text">Service v4</a></li>
                            <li className="mm-listitem"><a href="page-service-v5.html" className="mm-listitem__text">Service v5</a></li>
                            <li className="mm-listitem"><a href="page-service-v6.html" className="mm-listitem__text">Service v6</a></li>
                            <li className="mm-listitem"><a href="page-service-v7.html" className="mm-listitem__text">Service v7</a></li>
                            <li className="mm-listitem"><a href="page-service-all.html" className="mm-listitem__text">Service All</a></li>
                            <li className="mm-listitem"><a href="page-service-single.html" className="mm-listitem__text">Service Single</a></li>
                            <li className="mm-listitem"><a href="page-service-single-v1.html" className="mm-listitem__text">Single V1</a></li>
                            <li className="mm-listitem"><a href="page-service-single-v2.html" className="mm-listitem__text">Single V2</a></li>
                        </ul>
                    </div>
                    <div className="mm-panel mm-panel--noanimation" id="mm-9" data-mm-parent="mm-8" inert="true">
                        <div className="mm-navbar">
                            <a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-5" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-5"><span>Projects</span></a>
                        </div>
                        <ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-project-v1.html" className="mm-listitem__text">Project v1</a></li>
                            <li className="mm-listitem"><a href="page-project-list-v1.html" className="mm-listitem__text">List v1</a></li>
                            <li className="mm-listitem"><a href="page-project-list-v2.html" className="mm-listitem__text">List v2</a></li>
                            <li className="mm-listitem"><a href="page-project-list-v3.html" className="mm-listitem__text">List v3</a></li>
                            <li className="mm-listitem"><a href="page-project-single.html" className="mm-listitem__text">Project Single</a></li>
                            <li className="mm-listitem"><a href="page-project-single-v1.html" className="mm-listitem__text">Single V1</a></li>
                            <li className="mm-listitem"><a href="page-project-single-v2.html" className="mm-listitem__text">Single V2</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-11" data-mm-parent="mm-10" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-5" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-5"><span>Job View</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-job-list-v1.html" className="mm-listitem__text">Job list v1</a></li>
                            <li className="mm-listitem"><a href="page-job-list-v2.html" className="mm-listitem__text">Job list v2</a></li>
                            <li className="mm-listitem"><a href="page-job-list-v3.html" className="mm-listitem__text">Job list V3</a></li>
                            <li className="mm-listitem"><a href="page-job-list-single.html" className="mm-listitem__text">Job Single</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-13" data-mm-parent="mm-12" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-1" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-1"><span>Users</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem" id="mm-14" data-mm-child="mm-15">
                                <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-15">Dashboard</a>
                            </li>
                            <li className="mm-listitem" id="mm-16" data-mm-child="mm-17">
                                <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-17">Employee</a>
                            </li>
                            <li className="mm-listitem" id="mm-18" data-mm-child="mm-19">
                                <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-19">Freelancer</a>
                            </li>
                            <li className="mm-listitem"><a href="page-become-seller.html" className="mm-listitem__text">Become Seller</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-15" data-mm-parent="mm-14" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-13" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-13"><span>Dashboard</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-dashboard.html" className="mm-listitem__text">Dashboard</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-proposal.html" className="mm-listitem__text">Proposal</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-save.html" className="mm-listitem__text">Saved</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-message.html" className="mm-listitem__text">Message</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-reviews.html" className="mm-listitem__text">Reviews</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-invoice.html" className="mm-listitem__text">Invoice</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-payouts.html" className="mm-listitem__text">Payouts</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-statement.html" className="mm-listitem__text">Statement</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-manage-service.html" className="mm-listitem__text">Manage Service</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-add-service.html" className="mm-listitem__text">Add Services</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-manage-jobs.html" className="mm-listitem__text">Manage Jobs</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-manage-project.html" className="mm-listitem__text">Manage Project</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-create-project.html" className="mm-listitem__text">Create Project</a></li>
                            <li className="mm-listitem"><a href="page-dashboard-profile.html" className="mm-listitem__text">My Profile</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-17" data-mm-parent="mm-16" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-13" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-13"><span>Employee</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-employee-v1.html" className="mm-listitem__text">Employee V1</a></li>
                            <li className="mm-listitem"><a href="page-employee-v2.html" className="mm-listitem__text">Employee V2</a></li>
                            <li className="mm-listitem"><a href="page-employee-single.html" className="mm-listitem__text">Employee Single</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-19" data-mm-parent="mm-18" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-13" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-13"><span>Freelancer</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-freelancer-v1.html" className="mm-listitem__text">Freelancer V1</a></li>
                            <li className="mm-listitem"><a href="page-freelancer-v2.html" className="mm-listitem__text">Freelancer V2</a></li>
                            <li className="mm-listitem"><a href="page-freelancer-v3.html" className="mm-listitem__text">Freelancer V3</a></li>
                            <li className="mm-listitem"><a href="page-freelancer-list-v1.html" className="mm-listitem__text">List V1</a></li>
                            <li className="mm-listitem"><a href="page-freelancer-list-v2.html" className="mm-listitem__text">List V2</a></li>
                            <li className="mm-listitem"><a href="page-freelancer-list-v3.html" className="mm-listitem__text">List V3</a></li>
                            <li className="mm-listitem"><a href="page-freelancer-single.html" className="mm-listitem__text">Freelancer Single</a></li>
                            <li className="mm-listitem"><a href="page-freelancer-single-v1.html" className="mm-listitem__text">Single V1</a></li>
                            <li className="mm-listitem"><a href="page-freelancer-single-v2.html" className="mm-listitem__text">Single V2</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-21" data-mm-parent="mm-20" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-1" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-1"><span>Pages</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem" id="mm-22" data-mm-child="mm-23">
                                <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-23">About</a>
                            </li>
                            <li className="mm-listitem" id="mm-24" data-mm-child="mm-25">
                                <a className="mm-btn mm-btn--next mm-listitem__btn mm-listitem__text" aria-label="Open submenu" href="#mm-25">Shop</a>
                            </li>
                            <li className="mm-listitem"><a href="page-contact.html" className="mm-listitem__text">Contact</a></li>
                            <li className="mm-listitem"><a href="page-error.html" className="mm-listitem__text">404</a></li>
                            <li className="mm-listitem"><a href="page-faq.html" className="mm-listitem__text">Faq</a></li>
                            <li className="mm-listitem"><a href="page-help.html" className="mm-listitem__text">Help</a></li>
                            <li className="mm-listitem"><a href="page-invoice.html" className="mm-listitem__text">Invoices</a></li>
                            <li className="mm-listitem"><a href="page-login.html" className="mm-listitem__text">Login</a></li>
                            <li className="mm-listitem"><a href="page-pricing.html" className="mm-listitem__text">Pricing</a></li>
                            <li className="mm-listitem"><a href="page-register.html" className="mm-listitem__text">Register</a></li>
                            <li className="mm-listitem"><a href="page-terms.html" className="mm-listitem__text">Terms</a></li>
                            <li className="mm-listitem"><a href="page-ui-element.html" className="mm-listitem__text">UI Elements</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-23" data-mm-parent="mm-22" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-21" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-21"><span>About</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-about.html" className="mm-listitem__text">About v1</a></li>
                            <li className="mm-listitem"><a href="page-about-v2.html" className="mm-listitem__text">About v2</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-25" data-mm-parent="mm-24" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-21" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-21"><span>Shop</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-shop.html" className="mm-listitem__text">List</a></li>
                            <li className="mm-listitem"><a href="page-shop-single.html" className="mm-listitem__text">Single</a></li>
                            <li className="mm-listitem"><a href="page-shop-cart.html" className="mm-listitem__text">Cart</a></li>
                            <li className="mm-listitem"><a href="page-shop-checkout.html" className="mm-listitem__text">Checkout</a></li>
                            <li className="mm-listitem"><a href="page-shop-order.html" className="mm-listitem__text">Order</a></li>
                        </ul></div><div className="mm-panel mm-panel--noanimation" id="mm-27" data-mm-parent="mm-26" inert="true"><div className="mm-navbar"><a className="mm-btn mm-btn--prev mm-navbar__btn" href="#mm-1" aria-label="Close submenu" /><a className="mm-navbar__title" tabIndex={-1} aria-hidden="true" href="#mm-1"><span>Blog</span></a></div><ul className="mm-listview">
                            <li className="mm-listitem"><a href="page-blog-v1.html" className="mm-listitem__text">List V1</a></li>
                            <li className="mm-listitem"><a href="page-blog-v2.html" className="mm-listitem__text">List V2</a></li>
                            <li className="mm-listitem"><a href="page-blog-v3.html" className="mm-listitem__text">List V3</a></li>
                            <li className="mm-listitem"><a href="page-blog-single.html" className="mm-listitem__text">Single</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <a className="mm-wrapper__blocker mm-blocker mm-slideout" id="mm-0" aria-label="Close menu" inert="true" href="#mm-28" />
            <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
                <div id="shadow-host-companion" />
            </div>
        </>
    )
}