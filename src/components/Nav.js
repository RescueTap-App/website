"use client";

import React, { useState } from "react";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
                    src="/assets/images/resources/logo.svg"
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
                        <a href="tel:+2348078875322">+234 807 887 5322</a>
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

              <div className="relative header-button-style1">
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="btn-one"
                >
                  <span className="txt">Download the App</span>
                </button>
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
                    <div className="md:hidden flex-col gap-4 py-4 flex">
                      <div className="relative header-button-style1">
                        <a
                          href="https://apps.apple.com/ng/app/rescuetap/id6741719319"
                          className="btn-one"
                        >
                          <span className="text-[11px]">Download on Apple</span>
                        </a>
                      </div>
                      <div className="relative header-button-style1">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.rescuetap.app"
                          className="btn-one"
                        >
                          <span className="text-[11px]">
                            Download on Android
                          </span>
                        </a>
                      </div>
                    </div>
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
                          {/* <li>
                            <a href="/Ambulance">Ambulance Dispatch Services</a>
                          </li>

                          <li>
                            <a href="/ALS">Advance Life Support</a>
                          </li> */}
                          <li>
                            <a href="/App">Emergency Response App</a>
                          </li>
                          <li>
                            <a href="/Drivers">
                              Transporter Registration/Verification
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
                        <a href="/AppSubscription">Subscription</a>
                      </li>
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
            {showDropdown && (
              <div className="absolute top-full  mt-2 right-0 bg-white shadow-lg rounded-lg p-2 z-100">
                <a
                  href="https://apps.apple.com/ng/app/rescuetap/id6741719319"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Download on iOS
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.rescuetap.app"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Download on Android
                </a>
              </div>
            )}
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
                    <a
                      href="https://www.facebook.com/share/1AvuLxWwaS/?mibextid=qi2Omg"
                      target="_blank"
                    >
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li className="flex items-center justify-center ">
                    <a
                      href="https://www.linkedin.com/company/rescuetap/"
                      target="_blank"
                      className="flex pt-[10px] px-[10px] items-center justify-center mx-0"
                    >
                      {/* <i className="icon-twitter" /> */}
                      <svg
                        width="18"
                        height="18"
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
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/rescuetap_app?igsh=MTNpdjJjZGtwd211dQ=="
                      target="_blank"
                    >
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
          <div className="nav-logo w-[80%]">
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
          <div className="social-links ">
            <ul className="clearfix gap-4">
              <li>
                <a
                  href="https://www.facebook.com/share/1AvuLxWwaS/?mibextid=qi2Omg"
                  target="_blank"
                >
                  <span className="fab fa fa-facebook-square" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/rescuetap/"
                  target="_blank"
                >
                  <span className="fab fa fa-linkedin-square" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/rescuetap/"
                  target="_blank"
                  className="flex justify-center mt-[20px]"
                >
                  <span className="fab fa fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/rescuetap/"
                  target="_blank"
                >
                  <span className="fab fa fa-twitter" />
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
