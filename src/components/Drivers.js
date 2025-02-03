"use client"
import React from "react";

function registerDriver(){
  
}
async function fetchresource (){
  const url = "https://plankton-app-nj7zb.ondigitalocean.app/drivers"
  fetch(url)
  .then((response) =>{

    return(response.body.getReader().read())
  })
  .then(({value, done}) =>{
    console.log(value)
  })
}


const Drivers = () => {
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
                    <h2>Driver Registration and Ride Verification</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li className="active">
                        Driver Registration and Ride Verification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End breadcrumb area*/}
        {/*Start Service Details area */}
        <section className="service-details-area">
          <div className="container">
            <div className="row">
              {/*Start Service Details Sidebar */}
              <div className="col-xl-4 col-lg-5 order-box-2">
                <div className="service-details__sidebar">
                  <div
                    className="view-all-service"
                    data-aos="slide-up"
                    data-aos-easing="linear"
                    data-aos-duration={1000}
                  >
                    <ul className="service-pages">
                      <li>
                        <a href="/Ambulance">
                          Ambulance Car <span className="icon-next-1" />
                        </a>
                      </li>

                      <li>
                        <a href="/ALS">
                          Advanced Life Support <span className="icon-next-1" />
                        </a>
                      </li>
                      <li>
                        <a href="/App">
                          Emergency App Services{" "}
                          <span className="icon-next-1" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="/Drivers">
                          Driver Registration and Ride Verification
                          <span className="icon-next-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="service-details-contact-info"
                    data-aos="slide-up"
                    data-aos-easing="linear"
                    data-aos-duration={1000}
                  >
                    <div
                      className="sidebar-info-box-bg"
                      style={{
                        backgroundImage:
                          "url(assets/images/sidebar/sidebar-info-box-bg.jpg)",
                      }}
                    />
                    <h3>Need an ambulance?</h3>
                    <p>
                      Download our online Brouchure to get detailed informaion
                      on our vehcle registration and ambulance services.
                    </p>
                    <h2>
                      <a href="tel:+2348147806378">+234 814 780 6378</a>
                    </h2>
                  </div>
                  <div
                    className="info-download-box"
                    data-aos="slide-up"
                    data-aos-easing="linear"
                    data-aos-duration={1000}
                  >
                    <ul>
                      <li>
                        <div className="icon">
                          <span className="icon-checked-1" />
                        </div>
                        <div className="title">
                          <h5>
                            <a
                              download="RescueTap_Brochure.pdf"
                              href="RescueTap_Brochure.pdf"
                            >
                              Download our Broucher
                            </a>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*End Service Details Sidebar */}
              {/*Start Service Details Content */}
              <div className="col-xl-8 col-lg-7 order-box-1">
                <div className="service-details__content">
                  <div className="img-box1">
                    <img
                      src="assets/images/services/service-details-1-img1.jpg"
                      alt
                    />
                  </div>
                  <div className="text-box1">
                    <h2>Driver Registration and Ride Verification</h2>
                    <p>Safe Rides, Trusted Drivers—Your Safety Comes First!</p>
                    <p>
                      At RescueTap, we prioritize safety and reliability by
                      carefully vetting every driver before they join our
                      network. Our streamlined yet comprehensive registration
                      process ensures only qualified and verified drivers
                      operate under RescueTap.
                    </p>
                  </div>

                  <div className="text-box4">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="content-box">
                          <h2>Steps to Register</h2>

                          <ul>
                            <li>
                              <span className="icon-checked" /> Verify each
                              driver's identity for accountability and
                              transparency
                            </li>
                            <li>
                              <span className="icon-checked" /> Record the date
                              the driver officially joins RescueTap for tracking
                              and updates.
                            </li>
                            <li>
                              <span className="icon-checked" /> Capture vehicle
                              identification to ensure easy monitoring and
                              security.
                            </li>
                            <li>
                              <span className="icon-checked" /> Document the
                              type, model, and condition of the vehicle to meet
                              safety and operational standards.
                            </li>
                            <li>
                              <span className="icon-checked" /> Perform security
                              and license checks to verify credibility and
                              compliance with legal standards.
                            </li>
                            <li>
                              <span className="icon-checked" /> Ensure drivers
                              are equipped with the necessary first-aid and
                              emergency response training.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="img-box">
                          <img
                            src="assets/images/services/service-details-img2.jpg"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="sec-title text-center">
                      <div className="icon">
                        <span className="icon-heartbeat" />
                      </div>
                      <div className="sub-title">
                        <h3>
                          Fill out the form below to book an ambulance for an
                          event, and we’ll respond promptly.
                        </h3>
                      </div>
                      <h2>Registration as a Driver</h2>
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
                                      <option
                                        className="w-[100%] bg-black"
                                        value=""
                                      >
                                        Select Service Type{" "}
                                      </option>
                                      <option value="basic">
                                        Fully kiited bus with paramedics (VVIP)-
                                        N200,000
                                      </option>
                                      <option
                                        value="advanced"
                                        className="bg-[#F2F3FA]"
                                      >
                                        Fully kiited bus without Paramedics
                                        (VIP) - N160,000
                                      </option>
                                      <option value="event-standby">
                                        Fully kiited Sienna with Paramedics
                                        (Advanced) - N150,000
                                      </option>
                                      <option value="event-standby">
                                        Fully kiited Sienna without Paramedics
                                        (Basic)- N130,000
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
                </div>
              </div>
              {/*End Service Details Content */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Drivers;
