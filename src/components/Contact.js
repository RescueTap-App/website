import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-area-bg"
            style={{
              backgroundImage: "url(assets/images/breadcrumb/breadcrumb-1.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="inner-content">
                  <div
                    className="title"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <h2>Contact</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="active">Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End breadcrumb area*/}
        {/*Start Contact Info Style2 Area*/}
        <section className="contact-info-style2-area">
          <div className="container">
            <div className="row text-right-rtl">
              <div className="col-xl-6">
                <div className="contact-info-style2__image">
                  <div className="inner">
                    <img
                      src="assets/images/resources/contact-info-style2__image.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-info-style1__content">
                  <div className="sec-title">
                    <div className="icon">
                      <span className="icon-heartbeat" />
                    </div>
                    <div className="sub-title">
                      <h3>Contact us</h3>
                    </div>
                    <h2>
                      Feel Free to Get in
                      <br /> Touch with us
                    </h2>
                  </div>
                  <div className="inner-content">
                    <div className="text">
                      <p>
                        Nulla quis commodo ligula. Curabitur bibendum ante at
                        nibh lobortis, nec volutpat mauris faucibus. Praesent
                        malesuada et tellus sed efficitur.
                      </p>
                    </div>
                    <h3>Contact Details</h3>
                    <p>
                    zone 7, Fairtrade Complex, 22 Bambari Cres, Wuse, Abuja 900287, Federal Capital Territory
                    </p>
                    <h2>
                      <a href="tel:123456789">+234 814 780 6378</a>
                    </h2>
                    <h4>
                      <a href="mailto:yourmail@email.com">
                        inquiry@rescuetap.com
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Contact Info Style2 Area*/}
        {/*Start Main Contact Form Area*/}
        <section className="main-contact-form-area">
          <div className="container">
            <div className="sec-title text-center">
              <div className="icon">
                <span className="icon-heartbeat" />
              </div>
              <div className="sub-title">
                <h3>Send us Message</h3>
              </div>
              <h2>Write us Anytime</h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-form">
                  <form
                    id="contact-form"
                    name="contact_form"
                    className="default-form2"
                    action="assets/inc/sendmail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="text"
                              name="form_name"
                              id="formName"
                              placeholder="Full Name"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="email"
                              name="form_email"
                              id="formEmail"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="text"
                              name="form_phone"
                              defaultValue
                              id="formPhone"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="text"
                              name="form_subject"
                              defaultValue
                              id="formSubject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <div className="input-box">
                            <textarea
                              name="form_message"
                              id="formMessage"
                              placeholder="Write a Message"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 text-center">
                        <div className="button-box">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            defaultValue
                          />
                          <button
                            className="btn-one"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            <span className="txt">send a message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Main Contact Form Area*/}
        {/*Start Google Map Style2 Area*/}
        <section className="google-map-area">
          <div className="auto-container">
            <div className="contact-page-map-outer">
              {/*Map Canvas*/}
              <div
                className="map-canvas"
                data-zoom={12}
                data-lat="-37.817085"
                data-lng="144.955631"
                data-type="roadmap"
                data-hue="#ffc400"
                data-title="Envato"
                data-icon-path="assets/images/icon/map-marker.png"
                data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
              ></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
