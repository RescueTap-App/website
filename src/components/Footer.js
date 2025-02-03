import React from "react";

const Footer = () => {
  return (
    <div className="bottom-parallax">
      <footer className="footer-area">
        <div
          className="footer-area-shape float-bob"
          style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
        />
        {/*Start Footer*/}
        <div className="footer">
          <div className="container">
            <div className="row text-right-rtl">
              {/*Start single footer widget*/}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="single-footer-widget marbtm50">
                  <div className="our-company-info">
                    <div className="footer-logo">
                      <a href="/">
                        <img
                          src="/assets/images/footer/footer-logo.png"
                          alt="Awesome Logo"
                          title
                          className="w-[50%]"
                        />
                      </a>
                    </div>
                    <div className="text-box">
                      <p>One Tap, Save Lives</p>
                    </div>
                    <div className="footer-widget-contact-info">
                      <ul>
                        <li>
                          <div className="inner">
                            <div className="icon phone">
                              <span className="icon-email" />
                            </div>
                            <div className="text">
                              <p>
                                <a href="mailto:yourmail@email.com">
                                  info@rescuetap.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <div className="icon">
                              <span className="icon-telephone" />
                            </div>
                            <div className="text">
                              <p>
                                <a href="tel:+2348147806378">
                                  +234 814 780 6378
                                </a>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <div className="icon mapmarker">
                              <span className="icon-pin" />
                            </div>
                            <div className="text">
                              <p>
                                zone 7, Fairtrade Complex, 22 Bambari Cres,
                                Wuse, Abuja 900287, Federal Capital Territory
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*End single footer widget*/}
              {/*Start single footer widget*/}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="single-footer-widget single-footer-widget--link-box margintop marbtm50">
                  <div className="title">
                    <h3>Links</h3>
                  </div>
                  <div className="footer-widget-links">
                    <ul>
                      <li>
                        <a href="/About">About</a>
                      </li>
                      <li>
                        <a href="/Team">Team</a>
                      </li>
                      {/* <li>
                        <a href="/Testimonials">Testimonials</a>
                      </li> */}
                      <li>
                        <a href="/TC">Terms and Condition</a>
                      </li>
                      <li>
                        <a href="/FAQ">FAQs</a>
                      </li>
                      <li>
                        <a href="/About">Blogs</a>
                      </li>
                      <li>
                        <a href="/Contact">Contact</a>
                      </li>
                      <li>
                        <a href="/Privacy">Privacy and Policy</a>
                      </li>
                      <li>
                        <a href="/AccountDelete">Account Deletion</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*End single footer widget*/}
              {/*Start single footer widget*/}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="single-footer-widget margintop">
                  <div className="title">
                    <h3>Services</h3>
                  </div>
                  <div className="footer-widget-links">
                    <ul>
                      <li>
                        <a href="/Ambulance">Ambulance Car</a>
                      </li>

                      <li>
                        <a href="/ALS">Advance Life Support</a>
                      </li>
                      <li>
                        <a href="/App">Emergency App Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*End single footer widget*/}
              {/*Start single footer widget*/}
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="single-footer-widget margintop pdtop20">
                  <div className="footer-widget-quote-box">
                    <h3>
                      We can help,
                      <br /> today.
                    </h3>
                    <p>
                      24 hours a day,
                      <br /> 7 days a week support.
                      <br /> Free, no obligation
                      <br /> price quotes.
                    </p>
                    <div className="btn-box">
                      <a className="btn-one" href="/Contact">
                        <span className="txt">Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End single footer widget*/}
            </div>
          </div>
        </div>
        {/*End Footer*/}
        <div className="footer-bottom">
          <div className="container">
            <div className="bottom-inner">
              <div className="copyright">
                <p>
                  Copyright © 2024 <a href="/">Rescuetap</a> All Rights
                  Reserved.
                </p>
              </div>
              <div className="footer-social-link">
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
                      className="flex pt-[15px] px-[15px] items-center justify-center mx-0"
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
