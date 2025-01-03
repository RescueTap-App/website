import React from "react";

const About = () => {
  return (
    <>
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
                  <h2>About Us</h2>
                </div>
                <div className="breadcrumb-menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End breadcrumb area*/}
      {/*Start About Style3 Area*/}
      <section className="about-style1-area">
        <div className="container">
          <div className="row text-right-rtl">
            <div className="col-xl-6">
              <div className="about-style3__image">
                <div className="inner">
                  <img
                    src="assets/images/about/about-style3__image-1.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-style3__content">
                <div className="sec-title">
                  <div className="icon">
                    <span className="icon-heartbeat" />
                  </div>
                  <div className="sub-title">
                    <h3>Read More About us</h3>
                  </div>
                  <h2>
                    Let’s Get to Know About
                    <br /> Ambulance Services
                  </h2>
                </div>
                <div className="inner-content">
                  <div className="text">
                    <p>
                      Lorem ipsum is simply free text dolor sit am adipi we help
                      you ensure everyone is in the right jobs sicing elit, sed
                      do consulting firms Et leggings across the nation tempor.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="single-box">
                        <ul>
                          <li>
                            <span className="icon-checked" />
                            Nsectetur cing elit.
                          </li>
                          <li>
                            <span className="icon-checked" />
                            Nsectetur cing elit.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="single-box">
                        <ul>
                          <li>
                            <span className="icon-checked" />
                            Suspe ndisse suscipit leo.
                          </li>
                          <li>
                            <span className="icon-checked" />
                            If you are to a passage.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="progress-levels">
                    {/*Skill Box*/}
                    <div className="progress-box wow">
                      <div className="inner count-box">
                        <div className="text">Air Ambulance</div>
                        <div className="bar">
                          <div className="bar-innner">
                            <div className="skill-percent">
                              <span
                                className="count-text"
                                data-speed={3000}
                                data-stop={95}
                              >
                                0
                              </span>
                              <span className="percent">%</span>
                            </div>
                            <div className="bar-fill" data-percent={95} />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Skill Box*/}
                    <div className="progress-box last-child wow">
                      <div className="inner count-box">
                        <div className="text">Car Ambulance</div>
                        <div className="bar">
                          <div className="bar-innner">
                            <div className="skill-percent">
                              <span
                                className="count-text"
                                data-speed={3000}
                                data-stop={70}
                              >
                                0
                              </span>
                              <span className="percent">%</span>
                            </div>
                            <div className="bar-fill" data-percent={70} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End About Style3 Area*/}
      {/*Start Features Style2 Area*/}
      <section className="features-style2-area gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="features-style2__title">
                <div className="sec-title">
                  <div className="icon">
                    <span className="icon-heartbeat" />
                  </div>
                  <div className="sub-title">
                    <h3>Our Benefits List</h3>
                  </div>
                  <h2>
                    Our Company Formola
                    <br /> for Success
                  </h2>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipisi cing
                    elit sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <ul className="features-style2__content">
                {/*Start single Features Style2*/}
                <li
                  className="single-features-style2 white-bg"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                >
                  <div className="icon-holder">
                    <span className="icon-medal" />
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">
                        Longstanding
                        <br /> Service
                      </a>
                    </h3>
                    <p>Lorem ipsum is simply dolor sit am adipi we help.</p>
                  </div>
                </li>
                {/*End single Features Style2*/}
                {/*Start single Features Style2*/}
                <li
                  className="single-features-style2 white-bg"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                >
                  <div className="icon-holder">
                    <span className="icon-safety" />
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">
                        High Standard
                        <br /> of Safety
                      </a>
                    </h3>
                    <p>Lorem ipsum is simply dolor sit am adipi we help.</p>
                  </div>
                </li>
                {/*End single Features Style2*/}
                {/*Start single Features Style2*/}
                <li
                  className="single-features-style2 white-bg"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                >
                  <div className="icon-holder">
                    <span className="icon-health-insurance" />
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">
                        Bedside to
                        <br /> Bedside Care
                      </a>
                    </h3>
                    <p>Lorem ipsum is simply dolor sit am adipi we help.</p>
                  </div>
                </li>
                {/*End single Features Style2*/}
                {/*Start single Features Style2*/}
                <li
                  className="single-features-style2 white-bg"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                >
                  <div className="icon-holder">
                    <span className="icon-money-exchange" />
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">
                        Affordable and
                        <br /> Effective
                      </a>
                    </h3>
                    <p>Lorem ipsum is simply dolor sit am adipi we help.</p>
                  </div>
                </li>
                {/*End single Features Style2*/}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*End Features Style2 Area*/}
      {/*Start Testimonial Style1 Area*/}
      <section className="testimonial-style1-area">
        <div
          className="shape wow slideInRight"
          data-wow-delay="400ms"
          data-wow-duration="3500ms"
        >
          <img
            className="zoom-fade"
            src="assets/images/shape/shape-1.png"
            alt
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial-style1-content">
                <div className="bg-color" />
                <div
                  className="theme_carousel testimonial-carousel owl-theme owl-carousel owl-nav-style-one"
                  data-options='{
                              "loop": true, 
                              "margin": 0, 
                              "autoheight":true, 
                              "lazyload":true, 
                              "nav": true, 
                              "dots": false, 
                              "autoplay": true, 
                              "autoplayTimeout": 5000, 
                              "smartSpeed": 500, 
                              "navText": ["<span class=\"left icon-next\"></span>",
                              "<span class=\"right icon-next\"></span>"], 
                              "responsive":{ 
                              "0" :{ "items": "1" }, 
                              "600" :{ "items" : "1" }, 
                              "768" :{ "items" : "1" }, 
                              "992":{ "items" : "1" }, 
                              "1200":{ "items" : "1" }
                          }
                      }'
                >
                  {/*Start Single Testimonial Style1*/}
                  <div className="single-testimonial-style1">
                    <div className="img-holder">
                      <img
                        src="assets/images/testimonial/testimonial-v1-1.jpg"
                        alt
                      />
                      <div className="overlay-content">
                        <div className="quote-icon">
                          <img src="assets/images/icon/quote.png" alt />
                        </div>
                      </div>
                      <div className="review-box">
                        <ul>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-holder">
                      <div className="sec-title sec-title--style2">
                        <div className="icon">
                          <span className="icon-heartbeat" />
                        </div>
                        <div className="sub-title">
                          <h3>Our Testimonials</h3>
                        </div>
                        <h2>What They Say</h2>
                      </div>
                      <div className="text">
                        <p>
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch.
                        </p>
                        <h3>
                          Kevin Martin <span>- Customer</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonial Style1*/}
                  {/*Start Single Testimonial Style1*/}
                  <div className="single-testimonial-style1">
                    <div className="img-holder">
                      <img
                        src="assets/images/testimonial/testimonial-v1-1.jpg"
                        alt
                      />
                      <div className="overlay-content">
                        <div className="quote-icon">
                          <img src="assets/images/icon/quote.png" alt />
                        </div>
                      </div>
                      <div className="review-box">
                        <ul>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-holder">
                      <div className="sec-title sec-title--style2">
                        <div className="icon">
                          <span className="icon-heartbeat" />
                        </div>
                        <div className="sub-title">
                          <h3>Our Testimonials</h3>
                        </div>
                        <h2>What They Say</h2>
                      </div>
                      <div className="text">
                        <p>
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch.
                        </p>
                        <h3>
                          Kevin Martin <span>- Customer</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonial Style1*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Testimonial Style1 Area*/}
      {/*Start Team Style1 Area*/}
      <section className="team-style1-area">
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="icon">
              <span className="icon-heartbeat" />
            </div>
            <div className="sub-title">
              <h3>Professional Team</h3>
            </div>
            <h2>Medical Flight Staff</h2>
          </div>
          <div className="row">
            {/*Start Single Team Style1*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="single-team-style1 wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <div className="inner">
                    <img src="assets/images/team/team-v1-1.jpg" alt />
                  </div>
                  <div className="title-holder text-center">
                    <h2>
                      <a href="#">Jessica Brown</a>
                    </h2>
                    <h3>Member</h3>
                    <div className="overlay-title">
                      <h2>
                        <a href="#">Jessica Brown</a>
                      </h2>
                      <h3>Member</h3>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Team Style1*/}
            {/*Start Single Team Style1*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="single-team-style1 wow fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <div className="inner">
                    <img src="assets/images/team/team-v1-2.jpg" alt />
                  </div>
                  <div className="title-holder text-center">
                    <h2>
                      <a href="#">Kevin Martin</a>
                    </h2>
                    <h3>Member</h3>
                    <div className="overlay-title">
                      <h2>
                        <a href="#">Kevin Martin</a>
                      </h2>
                      <h3>Member</h3>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Team Style1*/}
            {/*Start Single Team Style1*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="single-team-style1 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <div className="inner">
                    <img src="assets/images/team/team-v1-3.jpg" alt />
                  </div>
                  <div className="title-holder text-center">
                    <h2>
                      <a href="#">Sarah Albert</a>
                    </h2>
                    <h3>Member</h3>
                    <div className="overlay-title">
                      <h2>
                        <a href="#">Sarah Albert</a>
                      </h2>
                      <h3>Member</h3>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Team Style1*/}
            {/*Start Single Team Style1*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="single-team-style1 wow fadeInDown"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <div className="inner">
                    <img src="assets/images/team/team-v1-4.jpg" alt />
                  </div>
                  <div className="title-holder text-center">
                    <h2>
                      <a href="#">David Cooper</a>
                    </h2>
                    <h3>Member</h3>
                    <div className="overlay-title">
                      <h2>
                        <a href="#">David Cooper</a>
                      </h2>
                      <h3>Member</h3>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Team Style1*/}
          </div>
        </div>
      </section>
      {/*End Team Style1 Area*/}
      {/*Start Partner Area*/}
      <section className="partner-area">
        <div className="container">
          <div className="brand-content">
            <div
              className="inner"
              data-aos="slide-up"
              data-aos-easing="linear"
              data-aos-duration={1000}
            >
              <ul className="partner-box partner-carousel owl-carousel owl-theme owl-dot-style1 rtl-carousel">
                {/*Start Single Partner Logo Box*/}
                <li className="single-partner-logo-box">
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-logo-1.png"
                      alt="Awesome Image"
                    />
                  </a>
                </li>
                {/*End Single Partner Logo Box*/}
                {/*Start Single Partner Logo Box*/}
                <li className="single-partner-logo-box">
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-logo-2.png"
                      alt="Awesome Image"
                    />
                  </a>
                </li>
                {/*End Single Partner Logo Box*/}
                {/*Start Single Partner Logo Box*/}
                <li className="single-partner-logo-box">
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-logo-3.png"
                      alt="Awesome Image"
                    />
                  </a>
                </li>
                {/*End Single Partner Logo Box*/}
                {/*Start Single Partner Logo Box*/}
                <li className="single-partner-logo-box">
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-logo-4.png"
                      alt="Awesome Image"
                    />
                  </a>
                </li>
                {/*End Single Partner Logo Box*/}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
