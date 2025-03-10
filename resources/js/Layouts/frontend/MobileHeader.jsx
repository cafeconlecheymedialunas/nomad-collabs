export default function MobileHeader() {

  return (
    <div id="page" className="mobilie_header_nav stylehome1">
      <div className="mobile-menu">
        <div className="header bdrb1">
          <div className="menu_and_widgets">
            <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
              <a className="mobile_logo" href="#">
                <img src="https://creativelayers.net/themes/freeio-html/images/header-logo-dark.svg" />
              </a>
              <div className="right-side text-end">
                <a href="page-login.html">join</a>
                <a className="menubar ml30" href="#menu">
                  <img src="https://creativelayers.net/themes/freeio-html/images/mobile-dark-nav-icon.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="posr">
            <div className="mobile_menu_close_btn">
              <span className="far fa-times" />
            </div>
          </div>
        </div>
      </div>
      {/* /.mobile-menu */}
    </div>
  )
}