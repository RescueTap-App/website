import React from "react";

// function downloadPdf(){
//   document.getElementById('')
// }
document.getElementById('')
const Ambulance = () => {
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
                    <h2>Ambulance Car</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li className="active">Ambulance Car</li>
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
                      <li className="active">
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
                      <li>
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
                            <a href="#">Download our Broucher</a>
                            {/* <button onClick={} >Download our Broucher</button> */}
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
                    <h2>Ambulance Car</h2>
                    <p>
                      “Fast and Reliable Ambulance Services—Because Every Second
                      Counts!”
                    </p>
                    <p>
                      We provide 24/7 access to fully equipped ambulances
                      designed to handle medical emergencies with speed and
                      efficiency. Our vehicles are strategically positioned to
                      ensure faster response times, no matter where you are.
                    </p>
                  </div>
                  <div className="text-box2">
                    <div className="row">
                      <div className="col-xl-6">
                        <div
                          className="text-box2-single"
                          data-aos="fade-right"
                          data-aos-easing="linear"
                          data-aos-duration={2500}
                        >
                          <h4>
                            <span className="icon-right-arrow" /> Quick Dispatch
                          </h4>
                          <p>
                            Get an ambulance at your location within minutes.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div
                          className="text-box2-single"
                          data-aos="fade-left"
                          data-aos-easing="linear"
                          data-aos-duration={2500}
                        >
                          <h4>
                            <span className="icon-right-arrow" /> Certified EMTs
                            and Paramedics
                          </h4>
                          <p>
                            Skilled professionals ready to handle emergencies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-box2">
                    <div className="row">
                      <div className="col-xl-6">
                        <div
                          className="text-box2-single"
                          data-aos="fade-left"
                          data-aos-easing="linear"
                          data-aos-duration={2500}
                        >
                          <h4>
                            <span className="icon-right-arrow" /> Spacious and
                            Hygienic Interiors
                          </h4>
                          <p>Safe and comfortable transport for patients.</p>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div
                          className="text-box2-single"
                          data-aos="fade-left"
                          data-aos-easing="linear"
                          data-aos-duration={2500}
                        >
                          <h4>
                            <span className="icon-right-arrow" /> GPS-Enabled
                            Navigation
                          </h4>
                          <p>Faster routes to hospitals and care centers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-box4">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="content-box">
                          <h2>Equipment Includes</h2>

                          <ul>
                            <li>
                              <span className="icon-checked" /> Stretcher and
                              Spine Board
                            </li>
                            <li>
                              <span className="icon-checked" /> Oxygen Tanks and
                              Masks
                            </li>
                            <li>
                              <span className="icon-checked" /> Suction Machines
                            </li>
                            <li>
                              <span className="icon-checked" /> IV Kits and
                              Medication Storage
                            </li>
                            <li>
                              <span className="icon-checked" /> Trauma Kits and
                              First Aid Supplies
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

export default Ambulance;
