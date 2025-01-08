import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Index = () => {
  return (
    <>
      {/* preloader */}
      <section className="main-slider style1">
        <div className="slider-box">
          <div
            className="slider-contact-info-box"
            data-aos="slide-left"
            data-aos-easing="linear"
            data-aos-duration={1500}
          >
            <div className="slider-contact-info">
              <div className="icon">
                <div className="inner">
                  <span className="icon-phone-call" />
                </div>
              </div>
              <div className="text">
                <h2>
                  <a href="tel:123456789">+ 1 (246) 333-0088</a>
                </h2>
                <p>
                  Need help? Call anytime for
                  <br /> ambulance services
                </p>
              </div>
            </div>
          </div>
          {/* Banner Carousel */}
          <div className="banner-carousel owl-theme owl-carousel">
            {/* Slide */}
            <div className="slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(assets/images/slides/slide-v1-1.jpg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="content">
                  <div className="sub-title">
                    <h3>Your Health is our Priority</h3>
                  </div>
                  <div className="big-title">
                    <h2>
                      Emergency 
                      <br /> Medical Services
                    </h2>
                  </div>
                  <div className="btns-box">
                    <a className="btn-one" href="about.html">
                      <span className="txt">
                        discover more
                        <i className="icon-refresh arrow" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide */}
            <div className="slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(assets/images/slides/slide-v1-2.jpg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="content">
                  <div className="sub-title">
                    <h3>Emergencies Happen — Help is Just a Tap Away!</h3>
                  </div>
                  <div className="big-title">
                    <h2>
                      {/* The Preferred Air */}
                      RescueTap
                      <br /> your trusted emergency response platform
                    </h2>
                  </div>
                  <div className="btns-box">
                    <a className="btn-one" href="about.html">
                      <span className="txt">
                        Get Help Now
                        <i className="icon-refresh arrow" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide */}
            <div className="slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(assets/images/slides/slide-v1-3.jpg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="content">
                  <div className="sub-title">
                    <h3>Emergency Help at Your Fingertips—Instant, Reliable, and Life-Saving!
                    </h3>
                  </div>
                  <div className="big-title">
                    <h2>
                      Emergency
                      <br /> Medical Services
                    </h2>
                  </div>
                  <div className="btns-box">
                    <a className="btn-one" href="about.html">
                      <span className="txt">
                      Get Help Now
                        <i className="icon-refresh arrow" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Main Slider */}
      {/*Start About Style1 Area*/}
      <section className="about-style1-area">
        <div className="container">
          <div className="row text-right-rtl">
            <div className="col-xl-6">
              <div className="about-style1__image clearfix">
                <div className="inner">
                  <img
                    src="assets/images/about/about-style1__image-1.jpg"
                    alt
                  />
                </div>
                <div className="overlay-content">
                  <div className="icon">
                    <span className="icon-ambulance" />
                  </div>
                  <div className="text">
                    <p>Established in</p>
                    <h2>1987</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-style1__content">
                <div className="sec-title">
                  <div className="icon">
                    <span className="icon-heartbeat" />
                  </div>
                  <div className="sub-title">
                    <h3>Our Introductions</h3>
                  </div>
                  <h2>
                    A Leading Medical Service
                    <br /> Provider
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
                      <div className="single-text-box">
                        <h3>
                          <span className="icon-right-arrow" />
                          Help us Save a Life
                        </h3>
                        <p>
                          Nullam mollis elit quis dusto is lacinia efficitur
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="single-text-box">
                        <h3>
                          <span className="icon-right-arrow" />
                          Join our Big Family
                        </h3>
                        <p>
                          Nullam mollis elit quis dusto is lacinia efficitur
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btns-box">
                    <a className="btn-one" href="about.html">
                      <span className="txt">
                        Learn More
                        <i className="icon-refresh arrow" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End About Style1 Area*/}
      {/*Start Features Style1 Area*/}
      <section className="features-style1-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="features-style1__content">
                <ul>
                  <li>
                    <div className="single-features-style1">
                      <div className="icon-holder">
                        <div className="box" />
                        <span className="icon-clinic" />
                      </div>
                      <div className="text-holder">
                        <h3>
                          <a href="#">Impeccable Safety</a>
                        </h3>
                        <p>Lorem ipsum is simply dolor sit am adipi we help.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-features-style1">
                      <div className="icon-holder">
                        <div className="box" />
                        <span className="icon-diploma" />
                      </div>
                      <div className="text-holder">
                        <h3>
                          <a href="#">Fully Licensed</a>
                        </h3>
                        <p>Lorem ipsum is simply dolor sit am adipi we help.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-features-style1">
                      <div className="icon-holder">
                        <div className="box" />
                        <span className="icon-ambulance-1" />
                      </div>
                      <div className="text-holder">
                        <h3>
                          <a href="#">Available 24/7</a>
                        </h3>
                        <p>Lorem ipsum is simply dolor sit am adipi we help.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Features Style1 Area*/}
      {/*Start Service Style1 Area*/}
      <section className="service-style1-area">
        <div className="container">
          <div className="sec-title text-center">
            <div className="icon">
              <span className="icon-heartbeat" />
            </div>
            <div className="sub-title">
              <h3>What We’re Offering</h3>
            </div>
            <h2>About Our Services</h2>
          </div>
          <div className="row">
            {/*Start Single Service Style1*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="single-service-style1 wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <img src="assets/images/services/service-v1-1.jpg" alt />
                </div>
                <div className="text-holder">
                  <h3>
                    <a href="services-single-1.html">Ambulance Car</a>
                  </h3>
                  <p>
                    Lorem ipsum is simply dolor sit am adipi we help you ensure
                    everyone.
                  </p>
                  <div className="btn-box">
                    <a href="services-single-1.html">
                      Read More <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Service Style1*/}
            {/*Start Single Service Style1*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="single-service-style1 wow fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <img src="assets/images/services/service-v1-2.jpg" alt />
                </div>
                <div className="text-holder">
                  <h3>
                    <a href="services-single-2.html">Medical Flight Services</a>
                  </h3>
                  <p>
                    Lorem ipsum is simply dolor sit am adipi we help you ensure
                    everyone.
                  </p>
                  <div className="btn-box">
                    <a href="services-single-2.html">
                      Read More <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Service Style1*/}
            {/*Start Single Service Style1*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="single-service-style1 wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <img src="assets/images/services/service-v1-3.jpg" alt />
                </div>
                <div className="text-holder">
                  <h3>
                    <a href="services-single-3.html">Medical Escort</a>
                  </h3>
                  <p>
                    Lorem ipsum is simply dolor sit am adipi we help you ensure
                    everyone.
                  </p>
                  <div className="btn-box">
                    <a href="services-single-3.html">
                      Read More <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Service Style1*/}
          </div>
        </div>
      </section>
      {/*End Service Style1 Area*/}
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
                        src="assets/images/testimonial/testimonial-v1-2.jpg"
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
      {/*Start Features Style2 Area*/}
      <section className="features-style2-area">
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
                  className="single-features-style2"
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
                  className="single-features-style2"
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
                  className="single-features-style2"
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
                  className="single-features-style2"
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
      {/*Start Partner Area*/}
      <section className="partner-area">
        <div className="container">
          <div className="brand-content">
            <div className="inner">
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
      {/*End Partner Area*/}
      {/*Start slogan area*/}
      <section className="slogan-area">
        <div
          className="map-box wow slideInRight"
          data-wow-delay="1400ms"
          data-wow-duration="5500ms"
        >
          <img className="float-bob" src="assets/images/shape/map.png" alt />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="slogan-img-box">
                <div
                  className="inner wow slideInLeft"
                  data-wow-delay="400ms"
                  data-wow-duration="3500ms"
                >
                  <img
                    className="float-bob-y"
                    src="assets/images/resources/ambulance.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              <div className="slogan-text-box">
                <h2>
                  Find out Why Patients Trust
                  <br /> Our Ambulance
                </h2>
                <h4>
                  Call anytime <a href="tel:123456789">+234 814 780 6378</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-12">
              <div className="slogan-btn-box">
                <a className="btn-one" href="contact.html">
                  <span className="txt">Contact with Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End slogan area*/}
      {/*Start Blog Style1 Area*/}
      <section className="blog-style1-area">
        <div className="gray-bg" />
        <div className="container">
          <div className="sec-title text-center">
            <div className="icon">
              <span className="icon-heartbeat" />
            </div>
            <div className="sub-title">
              <h3>Latest Blog Posts</h3>
            </div>
            <h2>News &amp; Articles</h2>
          </div>
          <div className="row">
            {/*Start Single Blog Style1*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="single-blog-style1"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration={1000}
              >
                <div className="img-holder">
                  <img src="assets/images/blog/blog-v1-1.jpg" alt />
                </div>
                <div className="text-holder">
                  <div className="meta-info">
                    <p>
                      <span className="icon-calendar" /> 20 Sep, 2021
                    </p>
                  </div>
                  <h3>
                    <a href="blog-single.html">
                      Trusted, International Air Ambulance Company
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                    do.
                  </p>
                  <div className="btn-box">
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Blog Style1*/}
            {/*Start Single Blog Style1*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="single-blog-style1"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={1500}
              >
                <div className="img-holder">
                  <img src="assets/images/blog/blog-v1-2.jpg" alt />
                </div>
                <div className="text-holder">
                  <div className="meta-info">
                    <p>
                      <span className="icon-calendar" /> 20 Sep, 2021
                    </p>
                  </div>
                  <h3>
                    <a href="blog-single.html">
                      Working for the ambulance service is much more than...
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                    do.
                  </p>
                  <div className="btn-box">
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Blog Style1*/}
            {/*Start Single Blog Style1*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="single-blog-style1"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration={1000}
              >
                <div className="img-holder">
                  <img src="assets/images/blog/blog-v1-3.jpg" alt />
                </div>
                <div className="text-holder">
                  <div className="meta-info">
                    <p>
                      <span className="icon-calendar" /> 20 Sep, 2021
                    </p>
                  </div>
                  <h3>
                    <a href="blog-single.html">
                      A Non-Emergency Trusted Ambulance services
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                    do.
                  </p>
                  <div className="btn-box">
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Blog Style1*/}
          </div>
        </div>
      </section>
      {/*End Blog Style1 Area*/}
      {/*Start Contact Info Style1 Area*/}

      {/*End Contact Info Style1 Area*/}

      {/*Start footer area */}

      {/*End footer area*/}

      {/* search-popup */}

      {/* search-popup end */}
    </>
  );
};

export default Index;
