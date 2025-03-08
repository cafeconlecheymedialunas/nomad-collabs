export default function Sidebar({sideBarOpened}) {
    return (
        <div className="dashboard__sidebar d-none d-lg-block">
            <div className="dashboard_sidebar_list">
                <p className="fz15 fw400 ff-heading pl30">Start</p>
                <div className="sidebar_list_item">
                    <a href="page-dashboard.html" className="items-center -is-active"><i className="flaticon-home mr15" />Dashboard</a>
                </div>
                <div className="sidebar_list_item">
                    <a href="page-dashboard-proposal.html" className="items-center"><i className="flaticon-document mr15" />My Proposals</a>
                </div>
                <div className="sidebar_list_item">
                    <a href="page-dashboard-save.html" className="items-center"><i className="flaticon-like mr15" />Saved</a>
                </div>
                <div className="sidebar_list_item ">
                    <a href="page-dashboard-message.html" className="items-center"><i className="flaticon-chat mr15" />Message</a>
                </div>
                <div className="sidebar_list_item ">
                    <a href="page-dashboard-reviews.html" className="items-center"><i className="flaticon-review-1 mr15" />Reviews</a>
                </div>
                <div className="sidebar_list_item">
                    <a href="page-dashboard-invoice.html" className="items-center"><i className="flaticon-receipt mr15" />Invoice</a>
                </div>
                <div className="sidebar_list_item">
                    <a href="page-dashboard-payouts.html" className="items-center"><i className="flaticon-dollar mr15" />Payouts</a>
                </div>
                <div className="sidebar_list_item">
                    <a href="page-dashboard-statement.html" className="items-center"><i className="flaticon-web mr15" />Statements</a>
                </div>
                <p className="fz15 fw400 ff-heading pl30 mt30">Organize and Manage</p>
                <div className="sidebar_list_item ">
                    <a href="page-dashboard-manage-service.html" className="items-center"><i className="flaticon-presentation mr15" />Manage Services</a>
                </div>
                <div className="sidebar_list_item ">
                    <a href="page-dashboard-manage-jobs.html" className="items-center"><i className="flaticon-briefcase mr15" />Manage Jobs</a>
                </div>
                <div className="sidebar_list_item ">
                    <a href="page-dashboard-manage-project.html" className="items-center"><i className="flaticon-content mr15" />Manage Project</a>
                </div>
                <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
                <div className="sidebar_list_item ">
                    <a href="page-dashboard-profile.html" className="items-center"><i className="flaticon-photo mr15" />My Profile</a>
                </div>
                <div className="sidebar_list_item ">
                    <a href="page-login.html" className="items-center"><i className="flaticon-logout mr15" />Logout</a>
                </div>
            </div>
        </div>
    )
}