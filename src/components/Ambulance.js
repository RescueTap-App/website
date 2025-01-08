import React from "react";

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
                        <a href="index.html">Home</a>
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
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Aelltes port lacus quis enim var sed
                      efficitur turpis gilla sed sit amet finibus eros. Lorem
                      Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the ndustry standard dummy
                      text ever since the 1500s.
                    </p>
                    <p>
                      It has survived not only five centuries. Lorem Ipsum is
                      simply dummy text of the new design printng and type
                      setting Ipsum take a look at our round. When an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.
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
                            <span className="icon-right-arrow" /> Help us Save a
                            Life
                          </h4>
                          <p>
                            Nullam mollis elit quis dusto is lacinia efficitur
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
                            <span className="icon-right-arrow" /> Join our Big
                            Family
                          </h4>
                          <p>
                            Nullam mollis elit quis dusto is lacinia efficitur
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-box3">
                    <p>
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting. Lorem Ipsum has been the ndustry standard
                      dummy text ever since the 1500s.
                    </p>
                  </div>
                  <div className="text-box4">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="content-box">
                          <h2>Service Benefits</h2>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum.
                          </p>
                          <ul>
                            <li>
                              <span className="icon-checked" /> In id diam nec
                              nisi congue tincidunt
                            </li>
                            <li>
                              <span className="icon-checked" /> Pn malesuada
                              purus a ligula dapibus
                            </li>
                            <li>
                              <span className="icon-checked" /> Vestibulum
                              tincidunt arcu vel nisl
                            </li>
                            <li>
                              <span className="icon-checked" /> Sed tristique
                              lorem non tesque
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
                  <div className="faq-style1__content">
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
