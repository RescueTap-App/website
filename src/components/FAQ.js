import React from "react";

const FAQ = () => {
  return (
    <>
      <div>
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-area-bg"
            style={{
              backgroundImage: "url(assets/images/breadcrumb/breadcrumb-6.jpg)",
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
                    <h2>FAQ</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">FAQ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End breadcrumb area*/}
        {/*Start Faq Page One*/}
        <section className="faq-page-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="faq-style1-content">
                  <ul className="accordion-box">
                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>How does RescueTap work?</h3>
                      </div>
                      <div className="acc-content current">
                        <p>
                          RescueTap is a mobile app for real-time medical and
                          security assistance. Users can request help with one
                          tap, access vetted transport, notify next of kin and
                          get optimized ambulance care.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Is RescueTap available nationwide?</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                          The app is currently expanding its reach and services
                          to cover multiple regions across Nigeria. Coverage may
                          vary depending on partnerships with service providers
                          in different areas.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>How do I pay for services?</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                          Payment methods depend on the service requested and
                          include secure online payment options. In-app payment
                          solutions may support debit cards, bank transfers, and
                          mobile wallet options.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-style1-content faq-style1-content--margintop">
                  <ul className="accordion-box">
                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Is RescueTap a Health or Security Company?</h3>
                      </div>
                      <div className="acc-content current">
                        <p>
                          RescueTap is a technology-driven service platform that
                          partners with healthcare and security organizations to
                          deliver emergency response services.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>How do I book an ambulance for an event?</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                          Open the RescueTap website. Tap on book ambulance or
                          the contact page. Confirm your details and location.
                          Fill in your payment details. An ambulance will be
                          dispatched to your location.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Where is your office located?</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                          RescueTap operates primarily in Abuja and Lagos, for
                          partnerships or official inquiries, please contact
                          their customer support for office details or visit
                          their website for more information.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
