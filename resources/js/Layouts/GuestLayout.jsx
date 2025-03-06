import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
<div className="wrapper ovh mm-page mm-slideout" id="mm-28">
  <div className="preloader" style={{display: 'none'}} />
  {/* Main Header Nav */}
  <header className="header-nav nav-innerpage-style main-menu">
    {/* Ace Responsive Menu */}
    <nav className="posr"> 
      <div className="container-fluid posr menu_bdrt1">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto pe-0">
            <div className="d-flex align-items-center">
              <a className="header-logo bdrr1 pr30 pr5-xl" href="index.html"><img src="images/header-logo-dark.svg" alt="Header Logo" /></a>
              <div className="home1_style">
                <div id="mega-menu">
                  <a className="btn-mega fw500" href="#"><span className="pl30 pl10-xl pr5 fz15 vam flaticon-menu" /> Categories</a>
                  <ul className="menu ps-0">
                    <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-developer" /> <span className="menu-title">Development &amp; IT</span> </a>
                      <div className="drop-menu d-flex justify-content-between">
                        <div className="one-third">
                          <div className="h6 cat-title">Web &amp; App Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">App DesignUX Design</a></li>
                            <li><a href="#">Landing Page Design</a></li>
                            <li><a href="#">Icon Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Marketing Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Social Media Design</a></li>
                            <li><a href="#">Email Design</a></li>
                            <li><a href="#">Web Banners</a></li>
                            <li><a href="#">Signage Design</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Art &amp; Illustration</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">NFT Art</a></li>
                            <li><a href="#">Pattern Design</a></li>
                            <li><a href="#">Portraits &amp; Caricatures</a></li>
                            <li><a href="#">Cartoons &amp; Comics</a></li>
                            <li><a href="#">Tattoo Design</a></li>
                            <li><a href="#">Storyboards</a></li>
                          </ul>
                          <div className="h6 cat-title">Gaming</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Game Art</a></li>
                            <li><a href="#">Graphics for Streamers</a></li>
                            <li><a href="#">Twitch Store</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Visual Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Image Editing</a></li>
                            <li><a href="#">Presentation Design</a></li>
                            <li><a href="#">Infographic Design</a></li>
                            <li><a href="#">Vector Tracing</a></li>
                            <li><a href="#">Resume Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Print Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">T-Shirts &amp; Merchandise</a></li>
                            <li><a href="#">Flyer Design</a></li>
                            <li><a href="#">Brochure Design</a></li>
                            <li><a href="#">Poster Design</a></li>
                            <li><a href="#">Catalog Design</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-web-design-1" /> <span className="menu-title">Design &amp; Creative</span> </a>
                      <div className="drop-menu d-flex justify-content-between">
                        <div className="one-third">
                          <div className="h6 cat-title">Web &amp; App Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">App DesignUX Design</a></li>
                            <li><a href="#">Landing Page Design</a></li>
                            <li><a href="#">Icon Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Marketing Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Social Media Design</a></li>
                            <li><a href="#">Email Design</a></li>
                            <li><a href="#">Web Banners</a></li>
                            <li><a href="#">Signage Design</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Art &amp; Illustration</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">NFT Art</a></li>
                            <li><a href="#">Pattern Design</a></li>
                            <li><a href="#">Portraits &amp; Caricatures</a></li>
                            <li><a href="#">Cartoons &amp; Comics</a></li>
                            <li><a href="#">Tattoo Design</a></li>
                            <li><a href="#">Storyboards</a></li>
                          </ul>
                          <div className="h6 cat-title">Gaming</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Game Art</a></li>
                            <li><a href="#">Graphics for Streamers</a></li>
                            <li><a href="#">Twitch Store</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Visual Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Image Editing</a></li>
                            <li><a href="#">Presentation Design</a></li>
                            <li><a href="#">Infographic Design</a></li>
                            <li><a href="#">Vector Tracing</a></li>
                            <li><a href="#">Resume Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Print Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">T-Shirts &amp; Merchandise</a></li>
                            <li><a href="#">Flyer Design</a></li>
                            <li><a href="#">Brochure Design</a></li>
                            <li><a href="#">Poster Design</a></li>
                            <li><a href="#">Catalog Design</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-digital-marketing" /> <span className="menu-title">Digital Marketing</span> </a>
                      <div className="drop-menu d-flex justify-content-between">
                        <div className="one-third">
                          <div className="h6 cat-title">Web &amp; App Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">App DesignUX Design</a></li>
                            <li><a href="#">Landing Page Design</a></li>
                            <li><a href="#">Icon Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Marketing Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Social Media Design</a></li>
                            <li><a href="#">Email Design</a></li>
                            <li><a href="#">Web Banners</a></li>
                            <li><a href="#">Signage Design</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Art &amp; Illustration</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">NFT Art</a></li>
                            <li><a href="#">Pattern Design</a></li>
                            <li><a href="#">Portraits &amp; Caricatures</a></li>
                            <li><a href="#">Cartoons &amp; Comics</a></li>
                            <li><a href="#">Tattoo Design</a></li>
                            <li><a href="#">Storyboards</a></li>
                          </ul>
                          <div className="h6 cat-title">Gaming</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Game Art</a></li>
                            <li><a href="#">Graphics for Streamers</a></li>
                            <li><a href="#">Twitch Store</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Visual Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Image Editing</a></li>
                            <li><a href="#">Presentation Design</a></li>
                            <li><a href="#">Infographic Design</a></li>
                            <li><a href="#">Vector Tracing</a></li>
                            <li><a href="#">Resume Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Print Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">T-Shirts &amp; Merchandise</a></li>
                            <li><a href="#">Flyer Design</a></li>
                            <li><a href="#">Brochure Design</a></li>
                            <li><a href="#">Poster Design</a></li>
                            <li><a href="#">Catalog Design</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-translator" /> <span className="menu-title">Writing &amp; Translation</span> </a>
                      <div className="drop-menu d-flex justify-content-between">
                        <div className="one-third">
                          <div className="h6 cat-title">Web &amp; App Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">App DesignUX Design</a></li>
                            <li><a href="#">Landing Page Design</a></li>
                            <li><a href="#">Icon Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Marketing Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Social Media Design</a></li>
                            <li><a href="#">Email Design</a></li>
                            <li><a href="#">Web Banners</a></li>
                            <li><a href="#">Signage Design</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Art &amp; Illustration</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">NFT Art</a></li>
                            <li><a href="#">Pattern Design</a></li>
                            <li><a href="#">Portraits &amp; Caricatures</a></li>
                            <li><a href="#">Cartoons &amp; Comics</a></li>
                            <li><a href="#">Tattoo Design</a></li>
                            <li><a href="#">Storyboards</a></li>
                          </ul>
                          <div className="h6 cat-title">Gaming</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Game Art</a></li>
                            <li><a href="#">Graphics for Streamers</a></li>
                            <li><a href="#">Twitch Store</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Visual Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Image Editing</a></li>
                            <li><a href="#">Presentation Design</a></li>
                            <li><a href="#">Infographic Design</a></li>
                            <li><a href="#">Vector Tracing</a></li>
                            <li><a href="#">Resume Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Print Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">T-Shirts &amp; Merchandise</a></li>
                            <li><a href="#">Flyer Design</a></li>
                            <li><a href="#">Brochure Design</a></li>
                            <li><a href="#">Poster Design</a></li>
                            <li><a href="#">Catalog Design</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-microphone" /> <span className="menu-title">Music &amp; Audio</span> </a>
                      <div className="drop-menu d-flex justify-content-between">
                        <div className="one-third">
                          <div className="h6 cat-title">Web &amp; App Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">App DesignUX Design</a></li>
                            <li><a href="#">Landing Page Design</a></li>
                            <li><a href="#">Icon Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Marketing Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Social Media Design</a></li>
                            <li><a href="#">Email Design</a></li>
                            <li><a href="#">Web Banners</a></li>
                            <li><a href="#">Signage Design</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Art &amp; Illustration</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">NFT Art</a></li>
                            <li><a href="#">Pattern Design</a></li>
                            <li><a href="#">Portraits &amp; Caricatures</a></li>
                            <li><a href="#">Cartoons &amp; Comics</a></li>
                            <li><a href="#">Tattoo Design</a></li>
                            <li><a href="#">Storyboards</a></li>
                          </ul>
                          <div className="h6 cat-title">Gaming</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Game Art</a></li>
                            <li><a href="#">Graphics for Streamers</a></li>
                            <li><a href="#">Twitch Store</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Visual Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Image Editing</a></li>
                            <li><a href="#">Presentation Design</a></li>
                            <li><a href="#">Infographic Design</a></li>
                            <li><a href="#">Vector Tracing</a></li>
                            <li><a href="#">Resume Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Print Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">T-Shirts &amp; Merchandise</a></li>
                            <li><a href="#">Flyer Design</a></li>
                            <li><a href="#">Brochure Design</a></li>
                            <li><a href="#">Poster Design</a></li>
                            <li><a href="#">Catalog Design</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-video-file" /> <span className="menu-title">Video &amp; Animation</span> </a>
                      <div className="drop-menu d-flex justify-content-between">
                        <div className="one-third">
                          <div className="h6 cat-title">Web &amp; App Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">App DesignUX Design</a></li>
                            <li><a href="#">Landing Page Design</a></li>
                            <li><a href="#">Icon Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Marketing Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Social Media Design</a></li>
                            <li><a href="#">Email Design</a></li>
                            <li><a href="#">Web Banners</a></li>
                            <li><a href="#">Signage Design</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Art &amp; Illustration</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">NFT Art</a></li>
                            <li><a href="#">Pattern Design</a></li>
                            <li><a href="#">Portraits &amp; Caricatures</a></li>
                            <li><a href="#">Cartoons &amp; Comics</a></li>
                            <li><a href="#">Tattoo Design</a></li>
                            <li><a href="#">Storyboards</a></li>
                          </ul>
                          <div className="h6 cat-title">Gaming</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Game Art</a></li>
                            <li><a href="#">Graphics for Streamers</a></li>
                            <li><a href="#">Twitch Store</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Visual Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Image Editing</a></li>
                            <li><a href="#">Presentation Design</a></li>
                            <li><a href="#">Infographic Design</a></li>
                            <li><a href="#">Vector Tracing</a></li>
                            <li><a href="#">Resume Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Print Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">T-Shirts &amp; Merchandise</a></li>
                            <li><a href="#">Flyer Design</a></li>
                            <li><a href="#">Brochure Design</a></li>
                            <li><a href="#">Poster Design</a></li>
                            <li><a href="#">Catalog Design</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-ruler" /> <span className="menu-title">Engineering &amp; Architecture</span> </a>
                      <div className="drop-menu d-flex justify-content-between">
                        <div className="one-third">
                          <div className="h6 cat-title">Web &amp; App Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">App DesignUX Design</a></li>
                            <li><a href="#">Landing Page Design</a></li>
                            <li><a href="#">Icon Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Marketing Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Social Media Design</a></li>
                            <li><a href="#">Email Design</a></li>
                            <li><a href="#">Web Banners</a></li>
                            <li><a href="#">Signage Design</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Art &amp; Illustration</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">NFT Art</a></li>
                            <li><a href="#">Pattern Design</a></li>
                            <li><a href="#">Portraits &amp; Caricatures</a></li>
                            <li><a href="#">Cartoons &amp; Comics</a></li>
                            <li><a href="#">Tattoo Design</a></li>
                            <li><a href="#">Storyboards</a></li>
                          </ul>
                          <div className="h6 cat-title">Gaming</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Game Art</a></li>
                            <li><a href="#">Graphics for Streamers</a></li>
                            <li><a href="#">Twitch Store</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Visual Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Image Editing</a></li>
                            <li><a href="#">Presentation Design</a></li>
                            <li><a href="#">Infographic Design</a></li>
                            <li><a href="#">Vector Tracing</a></li>
                            <li><a href="#">Resume Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Print Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">T-Shirts &amp; Merchandise</a></li>
                            <li><a href="#">Flyer Design</a></li>
                            <li><a href="#">Brochure Design</a></li>
                            <li><a href="#">Poster Design</a></li>
                            <li><a href="#">Catalog Design</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-goal" /> <span className="menu-title">Finance &amp; Accounting</span> </a>
                      <div className="drop-menu d-flex justify-content-between">
                        <div className="one-third">
                          <div className="h6 cat-title">Web &amp; App Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">App DesignUX Design</a></li>
                            <li><a href="#">Landing Page Design</a></li>
                            <li><a href="#">Icon Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Marketing Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Social Media Design</a></li>
                            <li><a href="#">Email Design</a></li>
                            <li><a href="#">Web Banners</a></li>
                            <li><a href="#">Signage Design</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Art &amp; Illustration</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">NFT Art</a></li>
                            <li><a href="#">Pattern Design</a></li>
                            <li><a href="#">Portraits &amp; Caricatures</a></li>
                            <li><a href="#">Cartoons &amp; Comics</a></li>
                            <li><a href="#">Tattoo Design</a></li>
                            <li><a href="#">Storyboards</a></li>
                          </ul>
                          <div className="h6 cat-title">Gaming</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">Game Art</a></li>
                            <li><a href="#">Graphics for Streamers</a></li>
                            <li><a href="#">Twitch Store</a></li>
                          </ul>
                        </div>
                        <div className="one-third">
                          <div className="h6 cat-title">Visual Design</div>
                          <ul className="ps-0 mb40">
                            <li><a href="#">Image Editing</a></li>
                            <li><a href="#">Presentation Design</a></li>
                            <li><a href="#">Infographic Design</a></li>
                            <li><a href="#">Vector Tracing</a></li>
                            <li><a href="#">Resume Design</a></li>
                          </ul>
                          <div className="h6 cat-title">Print Design</div>
                          <ul className="ps-0 mb-0">
                            <li><a href="#">T-Shirts &amp; Merchandise</a></li>
                            <li><a href="#">Flyer Design</a></li>
                            <li><a href="#">Brochure Design</a></li>
                            <li><a href="#">Poster Design</a></li>
                            <li><a href="#">Catalog Design</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="d-flex align-items-center">
              {/* Responsive Menu Structure*/}
              <ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
                <li className="visible_list"> <a className="list-item" href="#"><span className="title">Home</span><span className="arrow " /></a>
                  {/* Level Two*/}
                  <ul className="sub-menu">
                    <li><a href="index.html">Home V1</a></li>
                    <li><a href="index2.html">Home V2</a></li>
                    <li><a href="index3.html">Home V3</a></li>
                    <li><a href="index4.html">Home V4</a></li>
                    <li><a href="index5.html">Home V5</a></li>
                    <li><a href="index6.html">Home V6</a></li>
                    <li><a href="index7.html">Home V7</a></li>
                    <li><a href="index8.html">Home V8</a></li>
                    <li><a href="index9.html">Home V9</a></li>
                    <li><a href="index10.html">Home V10</a></li>
                    <li><a href="index11.html">Home V11</a></li>
                    <li><a href="index12.html">Home V12</a></li>
                    <li><a href="index13.html">Home V13</a></li>
                    <li><a href="index14.html">Home V14</a></li>
                    <li><a href="index15.html">Home V15</a></li>
                    <li><a href="index16.html">Home V16</a></li>
                    <li><a href="index17.html">Home V17</a></li>
                    <li><a href="index18.html">Home V18</a></li>
                    <li><a href="index19.html">Home V19</a></li>
                    <li><a href="index20.html">Home V20</a></li>
                  </ul>
                </li>
                <li className="visible_list"> <a className="list-item" href="#"><span className="title">Browse Jobs</span><span className="arrow " /></a>
                  <ul className="sub-menu">
                    <li> <a href="#"><span className="title">Services</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-service-v1.html">Service v1</a></li>
                        <li><a href="page-service-v2.html">Service v2</a></li>
                        <li><a href="page-service-v3.html">Service v3</a></li>
                        <li><a href="page-service-v4.html">Service v4</a></li>
                        <li><a href="page-service-v5.html">Service v5</a></li>
                        <li><a href="page-service-v6.html">Service v6</a></li>
                        <li><a href="page-service-v7.html">Service v7</a></li>
                        <li><a href="page-service-all.html">Service All</a></li>
                        <li><a href="page-service-single.html">Service Single</a></li>
                        <li><a href="page-service-single-v1.html">Single V1</a></li>
                        <li><a href="page-service-single-v2.html">Single V2</a></li>
                      </ul>
                    </li>
                    <li> <a href="#"><span className="title">Projects</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-project-v1.html">Project v1</a></li>
                        <li><a href="page-project-list-v1.html">List v1</a></li>
                        <li><a href="page-project-list-v2.html">List v2</a></li>
                        <li><a href="page-project-list-v3.html">List v3</a></li>
                        <li><a href="page-project-single.html">Project Single</a></li>
                        <li><a href="page-project-single-v1.html">Single V1</a></li>
                        <li><a href="page-project-single-v2.html">Single V2</a></li>
                      </ul>
                    </li>
                    <li> <a href="#"><span className="title">Job View</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-job-list-v1.html">Job list v1</a></li>
                        <li><a href="page-job-list-v2.html">Job list v2</a></li>
                        <li><a href="page-job-list-v3.html">Job list V3</a></li>
                        <li><a href="page-job-list-single.html">Job Single</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="visible_list"> <a className="list-item" href="#"><span className="title">Users</span><span className="arrow " /></a>
                  <ul className="sub-menu">
                    <li> <a href="#"><span className="title">Dashboard</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-dashboard.html">Dashboard</a></li>
                        <li><a href="page-dashboard-proposal.html">Proposal</a></li>
                        <li><a href="page-dashboard-save.html">Saved</a></li>
                        <li><a href="page-dashboard-message.html">Message</a></li>
                        <li><a href="page-dashboard-reviews.html">Reviews</a></li>
                        <li><a href="page-dashboard-invoice.html">Invoice</a></li>
                        <li><a href="page-dashboard-payouts.html">Payouts</a></li>
                        <li><a href="page-dashboard-statement.html">Statement</a></li>
                        <li><a href="page-dashboard-manage-service.html">Manage Service</a></li>
                        <li><a href="page-dashboard-add-service.html">Add Services</a></li>
                        <li><a href="page-dashboard-manage-jobs.html">Manage Jobs</a></li>
                        <li><a href="page-dashboard-manage-project.html">Manage Project</a></li>
                        <li><a href="page-dashboard-create-project.html">Create Project</a></li>
                        <li><a href="page-dashboard-profile.html">My Profile</a></li>
                      </ul>
                    </li>
                    <li> <a href="#"><span className="title">Employee</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-employee-v1.html">Employee V1</a></li>
                        <li><a href="page-employee-v2.html">Employee V2</a></li>
                        <li><a href="page-employee-single.html">Employee Single</a></li>
                      </ul>
                    </li>
                    <li> <a href="#"><span className="title">Freelancer</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-freelancer-v1.html">Freelancer V1</a></li>
                        <li><a href="page-freelancer-v2.html">Freelancer V2</a></li>
                        <li><a href="page-freelancer-v3.html">Freelancer V3</a></li>
                        <li><a href="page-freelancer-list-v1.html">List V1</a></li>
                        <li><a href="page-freelancer-list-v2.html">List V2</a></li>
                        <li><a href="page-freelancer-list-v3.html">List V3</a></li>
                        <li><a href="page-freelancer-single.html">Freelancer Single</a></li>
                        <li><a href="page-freelancer-single-v1.html">Single V1</a></li>
                        <li><a href="page-freelancer-single-v2.html">Single V2</a></li>
                      </ul>
                    </li>
                    <li> <a href="page-become-seller.html"><span className="title">Become Seller</span></a></li>
                  </ul>
                </li>
                <li className="visible_list"> <a className="list-item" href="#"><span className="title">Pages</span><span className="arrow " /></a>
                  <ul className="sub-menu">
                    <li> <a href="#"><span className="title">About</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-about.html">About v1</a></li>
                        <li><a href="page-about-v2.html">About v2</a></li>
                      </ul>
                    </li>
                    <li> <a href="#"><span className="title">Blog</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-blog-v1.html">List V1</a></li>
                        <li><a href="page-blog-v2.html">List V2</a></li>
                        <li><a href="page-blog-v3.html">List V3</a></li>
                        <li><a href="page-blog-single.html">Single</a></li>
                      </ul>
                    </li>
                    <li> <a href="#"><span className="title">Shop</span><span className="arrow " /></a>
                      <ul className="sub-menu">
                        <li><a href="page-shop.html">List</a></li>
                        <li><a href="page-shop-single.html">Single</a></li>
                        <li><a href="page-shop-cart.html">Cart</a></li>
                        <li><a href="page-shop-checkout.html">Checkout</a></li>
                        <li><a href="page-shop-order.html">Order</a></li>
                      </ul>
                    </li>
                    <li><a href="page-contact.html">Contact</a></li>
                    <li><a href="page-error.html">404</a></li>
                    <li><a href="page-faq.html">Faq</a></li>
                    <li><a href="page-help.html">Help</a></li>
                    <li><a href="page-invoice.html">Invoices</a></li>
                    <li><a href="page-login.html">Login</a></li>
                    <li><a href="page-pricing.html">Pricing</a></li>
                    <li><a href="page-register.html">Register</a></li>
                    <li><a href="page-terms.html">Terms</a></li>
                    <li><a href="page-ui-element.html">UI Elements</a></li>
                  </ul>
                </li>
                <li> <a className="list-item" href="page-contact.html">Contact</a></li>
              </ul>
              <a className="login-info bdrl1 pl15-lg pl30" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span className="flaticon-loupe" /></a>
              <a className="login-info mx15-lg mx30" href="page-become-seller.html"><span className="d-none d-xl-inline-block">Become a</span> Seller</a>
              <a className="login-info mr15-lg mr30" href="page-login.html">Sign in</a>
              <a className="ud-btn btn-thm add-joining" href="page-register.html">Join</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/* Search Modal */}
  <div className="search-modal">
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel" />
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fal fa-xmark" /></button>
          </div>
          <div className="modal-body">
            <div className="popup-search-field search_area">
              <input type="text" className="form-control border-0" placeholder="What service are you looking for today?" />
              <label><span className="far fa-magnifying-glass" /></label>
              <button className="ud-btn btn-thm" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hiddenbar-body-ovelay" />
  {/* Mobile Nav  */}
  <div id="page" className="mobilie_header_nav stylehome1">
    <div className="mobile-menu">
      <div className="header bdrb1">
        <div className="menu_and_widgets">
          <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
            <a className="mobile_logo" href="#"><img src="images/header-logo-dark.svg" alt /></a>
            <div className="right-side text-end">
              <a className href="page-login.html">join</a>
              <a className="menubar ml30" href="#menu"><img src="images/mobile-dark-nav-icon.svg" alt /></a>
            </div>
          </div>
        </div>
        <div className="posr"><div className="mobile_menu_close_btn"><span className="far fa-times" /></div></div>
      </div>
    </div>
    {/* /.mobile-menu */}
  </div>
  <div className="body_content">
    {/* Our LogIn Area */}
    <section className="our-login">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms" style={{visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp'}}>
            <div className="main-title text-center">
              <h2 className="title">Log In</h2>
              <p className="paragraph">Give your visitor a smooth online experience with a solid UX design</p>
            </div>
          </div>
        </div>
        <div className="row wow fadeInRight" data-wow-delay="300ms" style={{visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInRight'}}>
          <div className="col-xl-6 mx-auto">
            <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                {children}
              <div className="hr_content mb20"><hr /><span className="hr_top_text">OR</span></div>
              <div className="d-md-flex justify-content-between">
                <button className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0" type="button"><i className="fab fa-facebook-f pr10" /> Continue Facebook</button>
                <button className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0" type="button"><i className="fab fa-google" /> Continue Google</button>
                <button className="ud-btn btn-apple fz14 fw400" type="button"><i className="fab fa-apple" /> Continue Apple</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Our Footer */} 
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
    <a className="scrollToHome show" href="#"><i className="fas fa-angle-up" /></a>
  </div>
</div>

    );
}
