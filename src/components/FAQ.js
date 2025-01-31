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
                        <p>....</p>
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
                          We operate in Abuja and Lagos cities and are expanding
                          rapidly.
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
                          Payments can be made via the app using various payment
                          methods.
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
                        <p>..</p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>How do I book an ambulance?</h3>
                      </div>
                      <div className="acc-content">
                        <p>....</p>
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
                        <p>...</p>
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
