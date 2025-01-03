import React from "react";

const Nav = () => {
  return (
    <header className="main-header header-style-one">
      {/*Start Header Top*/}
      <div className="header-top">
        <div className="auto-container">
          <div className="outer-box">
            <div className="header-top__left">
              <div className="main-logo-box">
                <a href="/">
                  <img
                    src="assets/images/resources/logo2.png"
                    alt="Awesome Logo"
                    className="w-[50%]"
                    title
                  />
                </a>
              </div>
            </div>
            <div className="header-top__right">
              <div className="header-contact-info-style1">
                <ul>
                  <li>
                    <div className="icon">
                      <span className="icon-telephone" />
                    </div>
                    <div className="text">
                      <p>Call anytime</p>
                      <h5>
                        <a href="tel:123456789">+ 1- (246) 333-0089</a>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-email" />
                    </div>
                    <div className="text">
                      <p>Write email</p>
                      <h5>
                        <a href="mailto:yourmail@email.com">
                          inquiry@rescuetap.com
                        </a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="header-button-style1">
                <a className="btn-one" href="contact.html">
                  <span className="txt">Get a Free Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Top*/}
      {/*Start Header*/}
      <div className="header">
        <div className="auto-container">
          <div className="outer-box">
            {/*Start Header Left*/}
            <div className="header-left">
              <div className="nav-outer style1 clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <div className="inner">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </div>
                </div>
                {/* Main Menu */}
                <nav className="main-menu style1 navbar-expand-md navbar-light">
                  <div
                    className=" navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/About">About Us</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li>
                            <a href="/Ambulance">Ambulance Car</a>
                          </li>

                          <li>
                            <a href="/ALS">Advance Life Support</a>
                          </li>
                          <li>
                            <a href="/App">Emergency Response App</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Pages</a>
                        <ul>
                          <li>
                            <a href="/Team">Team</a>
                          </li>
                          <li>
                            <a href="/Testimonials">Testimonials</a>
                          </li>
                          <li>
                            <a href="/FAQ">FAQ’s</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/Blog">Blog</a>
                      </li>
                      <li>
                        <a href="/Contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
            </div>
            {/*End Header Left*/}
            {/*Start Header Right*/}
            <div className="header-right">
              <div className="header-social-link">
                <ul className="clearfix">
                  <li>
                    <a href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*End Header Right*/}
          </div>
        </div>
      </div>
      {/*End header*/}
      {/*Sticky Header*/}
      <div className="sticky-header">
        <div className="container">
          <div className="clearfix">
            {/*Logo*/}
            <div className="logo float-left">
              <a href="index.html" className="img-responsive">
                <img
                  src="/assets/images/resources/sticky-logo.png"
                  alt
                  title
                  className="w-[50%]"
                />
              </a>
            </div>
            {/*Right Col*/}
            <div className="right-col float-right">
              {/* Main Menu */}
              <nav className="main-menu clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/*End Sticky Header*/}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <span className="icon fa fa-times-circle" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img
                src="/assets/images/resources/mobilemenu-logo.png"
                alt
                title
              />
            </a>
          </div>
          <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="#">
                  <span className="fab fa fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa fa-twitter-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa fa-pinterest-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa fa-google-plus-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa fa-youtube-square" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
};

export default Nav;
