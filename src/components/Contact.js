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
                      alt="contact info"
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
                    <h3>
                      Need an ambulance?
                      <br />
                      Reach Out to Us Anytime!
                    </h3>
                  </div>
                  <div className="inner-content">
                    <div className="text">
                      <p>
                        We’re here to assist you. Whether you have questions,
                        need support, or want to partner with us, feel free to
                        get in touch.
                      </p>
                    </div>
                    <h3>Emails:</h3>
                    <div className="text">
                      <p>
                        For Support from RescueTap reach out to
                        <br />
                        <a href="mailto:support@rescuetap.com">
                          support@rescuetap.com
                        </a>
                      </p>
                      <p>
                        For more information reach out to
                        <br />
                        <a href="mailto:info@rescuetap.com">
                          info@rescuetap.com
                        </a>
                      </p>
                      <p>
                        For emergencies reach out to
                        <br />
                        <a href="mailto:emergency@rescuetap.com">
                          emergency@rescuetap.com
                        </a>
                      </p>
                    </div>
                    <h3>
                      <br /> <br />
                      Phone Numbers
                    </h3>
                    <div className="text">
                      <p>
                        Abuja: <a href="tel:+2347025692629">+2347025692629</a>
                      </p>
                      <p>
                        Lagos: <a href="tel:+2348147806378">+2348147806378</a>
                      </p>
                    </div>
                    Office Hours: 24/7
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
                <h3>
                  Fill out the form below to book an ambulance for an event, and
                  we’ll respond promptly.
                </h3>
              </div>
              <h2>Book an Ambulance</h2>
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
                              name="form_event"
                              id="formEvent"
                              placeholder="Event Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="text"
                              name="form_address"
                              id="formAddress"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* New date, time, and dropdown fields */}
                    <div className="row">
                      <div className="col-xl-6 ">
                        <div className="form-group bg-[#F2F3FA] p-1 pl-4 pt-1 font-medium">
                          <div className="input-box ">
                            {/* <label htmlFor="formDate">Date:</label> */}
                            <input
                              type="date"
                              name="form_date"
                              id="formDate"
                              required
                              className="bg-[#F2F3FA]"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group bg-[#F2F3FA] p-1 pl-4">
                          <div className="input-box">
                            <input
                              type="time"
                              name="form_time"
                              id="formTime"
                              className="bg-[#F2F3FA]"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="w-[100%] bg-[#F2F3FA]">
                        <div className=" w-[100%] bg-black">
                          <div className=" w-[100%]">
                            {/* <label htmlFor="formService">Service Type:</label> */}
                            <select
                              name="form_service"
                              id="formService"
                              required
                              className=" w-[100%] bg-black"
                            >
                              <option className="w-[100%] bg-black" value="">
                                Select Service Type{" "}
                              </option>
                              <option value="basic">
                                Fully kiited bus with paramedics (VVIP)-
                                N200,000
                              </option>
                              <option value="advanced" className="bg-[#F2F3FA]">
                                Fully kiited bus without Paramedics (VIP) -
                                N160,000
                              </option>
                              <option value="event-standby">
                                Fully kiited Sienna with Paramedics (Advanced) -
                                N150,000
                              </option>
                              <option value="event-standby">
                                Fully kiited Sienna without Paramedics (Basic)-
                                N130,000
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Message field */}
                    {/* <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <div className="input-box">
                            <textarea
                              name="form_message"
                              id="formMessage"
                              placeholder="Write a Message"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Submit button */}
                    <div className="row">
                      <div className="col-xl-12 text-center">
                        <div className="button-box">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                          />
                          <button
                            className="btn-one"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            <span className="txt">Send a Message</span>
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
