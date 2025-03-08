
import CategoriesMegaMenu from "./CategoriesMegaMenu"
import MainMenu from "./MainMenu"
export default function Header() {
    return (
        <header className="header-nav nav-innerpage-style main-menu">
            {/* Ace Responsive Menu */}
            <nav className="posr">
                <div className="container-fluid posr menu_bdrt1">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto pe-0">
                            <div className="d-flex align-items-center gap-3">
                                <a className="header-logo bdrr1" href={route("dashboard")}>
                                    <img src="https://creativelayers.net/themes/freeio-html/images/header-logo-dark.svg" alt="Header Logo" />
                                </a>
                                <div className="home1_style">
                                    <CategoriesMegaMenu/>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="d-flex align-items-center">
                                {/* Responsive Menu Structure*/}
                                <MainMenu/>
                                <a className="login-info bdrl1 pl15-lg pl30" data-bs-toggle="modal" href={route("dashboard")} role="button"><span className="flaticon-loupe" /></a>
                                <a className="login-info mx15-lg mx30" href={route("dashboard")}>
                                    <span className="d-none d-xl-inline-block">Become a</span> Seller
                                </a>
                                <a className="login-info mr15-lg mr30" href={route("dashboard")}>Sign in</a>
                                <a className="ud-btn btn-thm add-joining" href={route("dashboard")}>Join</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}