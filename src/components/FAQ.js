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
                        Download the app, create your profile, and access our support tools anytime — with just one tap.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>What is RescueTap?</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                        RescueTap is a digital safety platform that offers fast and reliable emergency response services. From alerting your contacts to guiding you through critical moments, we help you stay safe and connected.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Where is RescueTap available?</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                        We are currently operating in key cities in Nigeria, with plans to expand nationwide.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-style1-content faq-style1-content--margintop">
                  <ul className="accordion-box">
                  <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Is there a fee?</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                        Yes, there is! For any future premium plans, we’ll provide clear and transparent pricing.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Is RescueTap a Health or Security Company?</h3>
                      </div>
                      <div className="acc-content current">
                        <p>
                        RescueTap is a safety platform designed to support users in medical, emotional, or physical distress by providing instant emergency response and support tools.
                        </p>
                      </div>
                    </li>
                    {/* <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>How do I book an ambulance for an event?</h3>
                      </div>
                      <div className="acc-content">
                        <p class=" font-bold pb-2">
                          How to Book an Ambulance for an Event
                        </p>
                        <ol class="list-decimal ">
                          <li>
                            - Open the RescueTap website and click on{" "}
                            <strong>"Book an Ambulance"</strong> or navigate to
                            the <strong>"Contact"</strong> page.
                          </li>
                          <li>- Confirm your details and event location.</li>
                          <li>- Fill in your payment information.</li>
                          <li>
                            - Once confirmed, an ambulance will be dispatched to
                            your event location.
                          </li>
                          <li>
                            For further assistance, feel free to contact our
                            support team.
                          </li>
                        </ol>
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
                          RescueTap operates primarily in Abuja and Lagos. For
                          specific office details, please contact our customer
                          support team or visit us at 22 Bambari crescent, wuse
                          zone 3.
                        </p>
                      </div>
                    </li> */}
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
