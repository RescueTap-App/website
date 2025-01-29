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
                    src="assets/images/resources/logo.svg"
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
                        <a href="tel:123456789">+234 814 780 6378</a>
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
                          info@rescuetap.com
                        </a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="header-button-style1">
                <a className="btn-one" href="contact.html">
                  <span className="txt">Download the App</span>
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
                          <li>
                            <a href="/Drivers">
                              Driver Registration and Ride Verification
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* <li className="dropdown">
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
                      </li> */}
                      <li>
                        <a href="/Blog">Blog</a>
                      </li>
                      <li className="">
                        <a href="/FAQ">FAQ’s</a>
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
                  {/* <li>
                    <a href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li> */}
                  <li>
                    <a href="https://www.facebook.com/share/1AvuLxWwaS/?mibextid=qi2Omg" target="_blank">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/rescuetap/" target="_blank">
                      {/* <i className="icon-twitter" /> */}
                      <svg
                        width="168"
                        height="168"
                        viewBox="0 0 168 168"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M39.1059 54.0472H5.3796C3.88277 54.0472 2.66992 55.2606 2.66992 56.7569V165.105C2.66992 166.602 3.88277 167.815 5.3796 167.815H39.1059C40.6027 167.815 41.8156 166.602 41.8156 165.105V56.7569C41.8156 55.2606 40.6027 54.0472 39.1059 54.0472Z"
                          fill="black"
                        />
                        <path
                          d="M22.2551 0.184814C9.98354 0.184814 0 10.1575 0 22.4156C0 34.679 9.98354 44.6555 22.2551 44.6555C34.517 44.6555 44.4924 34.6785 44.4924 22.4156C44.4929 10.1575 34.517 0.184814 22.2551 0.184814Z"
                          fill="black"
                        />
                        <path
                          d="M124.891 51.3544C111.346 51.3544 101.332 57.1775 95.2587 63.794V56.7569C95.2587 55.2606 94.0458 54.0472 92.549 54.0472H60.2502C58.7534 54.0472 57.5405 55.2606 57.5405 56.7569V165.105C57.5405 166.602 58.7534 167.815 60.2502 167.815H93.9028C95.3996 167.815 96.6124 166.602 96.6124 165.105V111.498C96.6124 93.4335 101.519 86.3959 114.112 86.3959C127.826 86.3959 128.916 97.6779 128.916 112.427V165.106C128.916 166.602 130.128 167.815 131.625 167.815H165.29C166.787 167.815 168 166.602 168 165.106V105.675C168 78.8137 162.878 51.3544 124.891 51.3544Z"
                          fill="black"
                        />
                      </svg>
                      &#xf08c;
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/rescuetap_app?igsh=MTNpdjJjZGtwd211dQ==" target="_blank">
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
              <a href="/" className="img-responsive">
                <img
                  src="/assets/images/resources/sticky-logo.svg"
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
            <a href="/">
              <img
                src="/assets/images/resources/mobilemenu-logo.svg"
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
                  <span className="fab fa fa-facebook-square" />f
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="fab fa fa-linkedin-square" />
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
