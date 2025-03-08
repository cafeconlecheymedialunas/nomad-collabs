export default function Footer(){
    return (
        <section className="footer-style1 pt25 pb-0">
        <div className="container">
          <div className="row bb-white-light pb10 mb60">
            <div className="col-md-7">
              <div className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
                <a className="fz17 fw500 text-white mr15-md mr30" href>Terms of Service</a>
                <a className="fz17 fw500 text-white mr15-md mr30" href>Privacy Policy</a>
                <a className="fz17 fw500 text-white" href>Site Map</a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="social-widget text-center text-md-end">
                <div className="social-style1">
                  <a className="text-white me-2 fw500 fz17" href>Follow us</a>
                  <a href><i className="fab fa-facebook-f list-inline-item" /></a>
                  <a href><i className="fab fa-twitter list-inline-item" /></a>
                  <a href><i className="fab fa-instagram list-inline-item" /></a>
                  <a href><i className="fab fa-linkedin-in list-inline-item" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="link-style1 mb-4 mb-sm-5">
                <h5 className="text-white mb15">About</h5>
                <div className="link-list">
                  <a href>Careers</a>
                  <a href>Press &amp; News</a>
                  <a href>Partnerships</a>
                  <a href>Privacy Policy</a>
                  <a href>Terms of Service</a>
                  <a href>Investor Relations</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="link-style1 mb-4 mb-sm-5">
                <h5 className="text-white mb15">Categories</h5>
                <ul className="ps-0">
                  <li><a href>Graphics &amp; Design</a></li>
                  <li><a href>Digital Marketing</a></li>
                  <li><a href>Writing &amp; Translation</a></li>
                  <li><a href>Video &amp; Animation</a></li>
                  <li><a href>Music &amp; Audio</a></li>
                  <li><a href>Programming &amp; Tech</a></li>
                  <li><a href>Data</a></li>
                  <li><a href>Business</a></li>
                  <li><a href>Lifestyle</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="link-style1 mb-4 mb-sm-5">
                <h5 className="text-white mb15">Support</h5>
                <ul className="ps-0">
                  <li><a href>Help &amp; Support</a></li>
                  <li><a href>Trust &amp; Safety</a></li>
                  <li><a href>Selling on Freeio</a></li>
                  <li><a href>Buying on Freeio</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget">
                <div className="footer-widget mb-4 mb-sm-5">
                  <div className="mailchimp-widget">
                    <h5 className="title text-white mb20">Subscribe</h5>
                    <div className="mailchimp-style1">
                      <input type="email" className="form-control" placeholder="Your email address" />
                      <button type="submit">Send</button>
                    </div>
                  </div>
                </div>
                <div className="app-widget mb-4 mb-sm-5">
                  <h5 className="title text-white mb20">Apps</h5>
                  <div className="row mb-4 mb-lg-5">
                    <div className="col-lg-12">
                      <a className="app-list d-flex align-items-center mb10" href>
                        <i className="fab fa-apple fz17 mr15" />
                        <h6 className="app-title fz15 fw400 mb-0">iOS App</h6>
                      </a>
                      <a className="app-list d-flex align-items-center" href>
                        <i className="fab fa-google-play fz15 mr15" />
                        <h6 className="app-title fz15 fw400 mb-0">Android App</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-bdrt1 py-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-center text-lg-start">
                <p className="copyright-text mb-2 mb-md-0 text-white-light ff-heading">© Freeio. 2023 CreativeLayers. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer_bottom_right_btns text-center text-lg-end">
                <ul className="p-0 m-0">
                  <li className="list-inline-item">
                    <div className="dropdown bootstrap-select show-tick"><select className="selectpicker show-tick">
                        <option>US$ USD</option>
                        <option>Euro</option>
                        <option>Pound</option>
                      </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="US$ USD"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">US$ USD</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                  </li>
                  <li className="list-inline-item">
                    <div className="dropdown bootstrap-select show-tick"><select className="selectpicker show-tick">
                        <option>English</option>
                        <option>Frenc</option>
                        <option>Italian</option>
                        <option>Spanish</option>
                        <option>Turkey</option>
                      </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="English"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">English</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}