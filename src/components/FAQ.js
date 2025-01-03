import React from "react";

const FAQ = () => {
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
                    <h2>FAQ</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
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
                        <h3>Interdum et malesuada fames ac ante ipsum</h3>
                      </div>
                      <div className="acc-content current">
                        <p>
                          Suspendisse finibus urna mauris, vitae consequat quam
                          vel. Vestibulum leo ligula, vit commodo nisl Sed
                          luctus venenatis pellentesque.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Maecenas condimentum sollicitudin ligula,</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                          Suspendisse finibus urna mauris, vitae consequat quam
                          vel. Vestibulum leo ligula, vit commodo nisl Sed
                          luctus venenatis pellentesque.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Duis rhoncus orci ut metus rhoncus</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                          Suspendisse finibus urna mauris, vitae consequat quam
                          vel. Vestibulum leo ligula, vit commodo nisl Sed
                          luctus venenatis pellentesque.
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
                        <h3>Interdum et malesuada fames ac ante ipsum</h3>
                      </div>
                      <div className="acc-content current">
                        <p>
                          Suspendisse finibus urna mauris, vitae consequat quam
                          vel. Vestibulum leo ligula, vit commodo nisl Sed
                          luctus venenatis pellentesque.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Maecenas condimentum sollicitudin ligula,</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                          Suspendisse finibus urna mauris, vitae consequat quam
                          vel. Vestibulum leo ligula, vit commodo nisl Sed
                          luctus venenatis pellentesque.
                        </p>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="flaticon-down-arrow-2" />
                        </div>
                        <h3>Duis rhoncus orci ut metus rhoncus</h3>
                      </div>
                      <div className="acc-content">
                        <p>
                          Suspendisse finibus urna mauris, vitae consequat quam
                          vel. Vestibulum leo ligula, vit commodo nisl Sed
                          luctus venenatis pellentesque.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Faq Page One*/}
        {/*Start Faq Form Area*/}
        <section className="faq-form-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="faq-form-box">
                  <div className="sec-title text-center">
                    <div className="icon">
                      <span className="icon-heartbeat" />
                    </div>
                    <div className="sub-title">
                      <h3>Send us Message</h3>
                    </div>
                    <h2>Write us Anytime</h2>
                  </div>
                  <form
                    id="faq-form"
                    name="faq_form"
                    className="default-form1"
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_name"
                            defaultValue
                            placeholder="Full name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="email"
                            name="form_email"
                            defaultValue
                            placeholder="Email address"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_phone"
                            defaultValue
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_subject"
                            defaultValue
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-box">
                          <textarea
                            name="form_message"
                            placeholder="Your Question ..."
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="button-box">
                      <button
                        className="btn-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span className="txt">Send Request</span>
                      </button>
                    </div>
                  </form>
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
