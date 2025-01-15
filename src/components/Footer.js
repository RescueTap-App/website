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
                          src="assets/images/footer/footer-logo.png"
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
                      <li>
                        <a href="/Testimonials">Testimonials</a>
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
                    <a href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linkedin" />
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
