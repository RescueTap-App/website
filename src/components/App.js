import React from "react";

const App = () => {
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
                    <h2>General Services</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li className="active">Emergency App</li>
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
                      <li >
                        <a href="/Ambulance">
                          Ambulance Car <span className="icon-next-1" />
                        </a>
                      </li>

                      <li>
                        <a href="/ALS">
                          Advanced Life Support <span className="icon-next-1" />
                        </a>
                      </li>
                      <li  className="active">
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
                      src="assets/images/services/service-details-6-img1.jpg"
                      alt
                    />
                  </div>
                  <div className="text-box1">
                    <h2>Emergency Help Is Just a Tap Away!</h2>
                    <p>
                    RescueTap is more than just an app—it’s your lifeline during emergencies. Whether you need an ambulance, a paramedic, or assistance reaching the nearest hospital, we’ve got you covered.
                    </p>
                    <p>
                    The RescueTap App transforms your smartphone into a personal emergency assistant. Whether you need urgent medical help, an ambulance, or instant alerts to your loved ones, we’re here to keep you safe.  
                    </p>
                  </div>
                 
                 
                  <div className="text-box4">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="content-box">
                          <h2>App Features</h2>
                         
                          <ul>
                            <li>
                              <span className="icon-checked" /> User-Friendly Interface: Easy navigation for all age groups
                            </li>
                            <li>
                              <span className="icon-checked" />Real-Time Tracking: Track loved ones during emergencies.
                            </li>
                            <li>
                              <span className="icon-checked" /> Emergency Alerts: Notify family or emergency contact instantly.
                            </li>
                            <li>
                              <span className="icon-checked" />Push Notifications: Receive updates and reminders to stay prepared.
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
                  {/* <div className="faq-style1__content">
                    <ul className="accordion-box">
                      <li className="accordion block active-block">
                        <div className="acc-btn active">
                          <div className="icon-outer">
                            <i className="icon-down-arrow" />
                          </div>
                          <h3>Interdum et malesuada fames ac ante ipsum</h3>
                        </div>
                        <div className="acc-content current">
                          <p>
                            Suspendisse finibus urna mauris, vitae consequat
                            quam vel. Vestibulum leo ligula, vit commodo nisl
                            Sed luctus venenatis pellentesque.
                          </p>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer">
                            <i className="icon-down-arrow" />
                          </div>
                          <h3>Maecenas condimentum sollicitudin ligula.</h3>
                        </div>
                        <div className="acc-content">
                          <p>
                            Suspendisse finibus urna mauris, vitae consequat
                            quam vel. Vestibulum leo ligula, vit commodo nisl
                            Sed luctus venenatis pellentesque.
                          </p>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer">
                            <i className="icon-down-arrow" />
                          </div>
                          <h3>Duis rhoncus orci ut metus rhoncus.</h3>
                        </div>
                        <div className="acc-content">
                          <p>
                            Suspendisse finibus urna mauris, vitae consequat
                            quam vel. Vestibulum leo ligula, vit commodo nisl
                            Sed luctus venenatis pellentesque.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div> */}
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

export default App;
