import React from "react";

const Testimonials = () => {
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
                    <h2>Testimonials</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">Testimonials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End breadcrumb area*/}
        {/*Start Testimonial Page*/}
        <section className="testimonial-page">
          <div className="container">
            <div className="row">
              {/*Start Testimonial Style2 Single*/}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="testimonial-style2__single text-center"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                >
                  <div className="img-holder">
                    <img
                      src="assets/images/testimonial/testimonial-v2-1.jpg"
                      alt
                    />
                  </div>
                  <div className="text-holder">
                    <p>
                      RescueTap’s quick response saved my sister’s life during a
                      medical emergency!
                    </p>
                    <div className="border-box" />
                    <div className="client-info">
                      <h3>Precious Adeniyi</h3>
                      <span>Customers</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Testimonial Style2 Single*/}
              {/*Start Testimonial Style2 Single*/}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="testimonial-style2__single text-center"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                >
                  <div className="img-holder">
                    <img
                      src="assets/images/testimonial/testimonial-v2-2.jpg"
                      alt
                    />
                  </div>
                  <div className="text-holder">
                    <p>
                      The app is so easy to use, and knowing help is just a tap
                      away gives me peace of mind.
                    </p>
                    <div className="border-box" />
                    <div className="client-info">
                      <h3>Prisca Okafor</h3>
                      <span>Customers</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Testimonial Style2 Single*/}
              {/*Start Testimonial Style2 Single*/}

              {/*End Testimonial Style2 Single*/}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
