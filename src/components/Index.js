import React from "react";
import Form from "./Form";

// import Form from "./form";
import Nav from "./Nav";
import Footer from "./Footer";
import Blog from "./Blog";
import News from "./News";

const Index = () => {
  return (
    <>
      {/* preloader */}
      <section className="main-slider style1">
        <div className="slider-box">
          {/* <div
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
                  <a href="tel:+2348147806378">+234 814 780 6378</a>
                </h2>
                <p>
                  Need an ambulance? Call anytime for
                  <br /> ambulance services
                </p>
              </div>
            </div>
          </div> */}
          {/* Banner Carousel */}
          <div className="banner-carousel owl-theme owl-carousel">
            {/* Slide */}
            <div className="slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(assets/images/slides/slide-v1-1.svg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="content">
                  <div className="sub-title">
                  <p className = "font-light text-white underline">One tap could keep you safe.</p>
                  </div>
                  <div className="big-title">
                    <p className="text-white text-lg font-bold">
                    RescueTap lets you instantly share your location, send emergency alerts, <br/> and stay connected with the people who matter most because safety starts with awareness.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:w-[50%] w-[100%]">
                    <div className="btns-box">
                      <a className="btn-one" href="https://apps.apple.com/ng/app/rescuetap/id6741719319">
                        <span className="txt">
                          Download on iOS
                          <i className="icon-refresh arrow" />
                        </span>
                      </a>
                    </div>
                    <div className="btns-box">
                      <a className="btn-one" href="https://play.google.com/store/apps/details?id=com.rescuetapltd">
                        <span className="txt">
                          Download on Android
                          <i className="icon-refresh arrow" />
                        </span>
                      </a>
                    </div>
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
                    <p className = "font-light text-white underline">Stay Safe. Stay Alert.</p>
                  </div>
                  <div className="big-title">
                    <p className="text-white text-lg font-bold">
                      {/* The Preferred Air */}
                      If you’re on the move, at work, or out with friends, RescueTap lets your loved ones <br/> track your location in real-time and stay updated in case of emergencies — all in one tap.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:w-[50%] w-[100%]">
                    <div className="btns-box">
                      <a className="btn-one" href="https://apps.apple.com/ng/app/rescuetap/id6741719319">
                        <span className="txt">
                          Download on iOS
                          <i className="icon-refresh arrow" />
                        </span>
                      </a>
                    </div>
                    <div className="btns-box">
                      <a className="btn-one" href="https://play.google.com/store/apps/details?id=com.rescuetapltd">
                        <span className="txt">
                          Download on Android
                          <i className="icon-refresh arrow" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide */}
            {/* <div className="slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(assets/images/slides/slide-v1-3.svg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="content">
                  <div className="sub-title">
                    <h3>Verified Driver</h3>
                  </div>
                  <div className="big-title">
                    <h2>Register to be a verified RescueTap Driver</h2>
                  </div>
                  <div className="btns-box">
                    <a className="btn-one" href="/Drivers">
                      <span className="txt">
                        Register Now
                        <i className="icon-refresh arrow" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
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
                    <h2>2025</h2>
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
                    <h3>Safety? Think RescueTap!</h3>
                  </div>
                  <h2>
                    {/* A Leading Medical Service
                    <br /> Provider */}
                  </h2>
                </div>
                <div className="inner-content">
                  <div className="text">
                    <p>
                      {/* Lorem ipsum is simply free text dolor sit am adipi we help
                      you ensure everyone is in the right jobs sicing elit, sed
                      do consulting firms Et leggings across the nation tempor. */}
                      Rescuetap is your trusted safety platform designed to provide swift support in critical moments. If you're in danger, need urgent assistance, or simply want your loved ones to know you're safe, we've got you covered. </p>
                    <br/>
                  </div>
                  {/* <div className="row">
                    <div className="col-xl-6">
                      <div className="single-text-box">
                        <h3>
                          <span className="icon-right-arrow" />
                          Help us Save a Life
                        </h3>
                        <p>
                         
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
                        
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="flex md:flex-row mt-[-80px] flex-col gap-[20px]">
                    <div className="btns-box ">
                      <a className="btn-one" href="https://apps.apple.com/ng/app/rescuetap/id6741719319">
                        <span className="txt">
                          Download App
                          <i className="icon-refresh arrow" />
                        </span>
                      </a>
                    </div>
                    <div className="btns-box ">
                      <a className="btn-one" href="/Contact">
                        <span className="txt">
                        Call our helpline
                          <i className="icon-refresh arrow" />
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* <Form></Form> */}
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
                          <a href="#">
                            {/* Impeccable Safety */}
                            Quick Response Times
                          </a>
                        </h3>
                        <p>Our platform ensures your distress call reaches the right people instantly. Every second counts.</p>
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
                          <a href="#">Real-Time Tracking</a>
                        </h3>
                        <p>Stay updated with your loved ones’ locations when they activate safety alerts.</p>
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
                          <a href="#">Reliable & Secure</a>
                        </h3>
                        <p>We prioritize your privacy while delivering accurate and efficient support.</p>
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
              <h2>Our Offerings</h2>
            </div>
            <p>Your safety is our priority. We empower you to respond stay connected when it matters most through:</p>
          </div>
          <div className="row">
            {/*Start Single Service Style1*/}
            
            {/*End Single Service Style1*/}
            {/*Start Single Service Style1*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="single-service-style1 wow fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="img-holder">
                  <img src="assets/images/services/service-v1-4.jpg" alt />
                </div>
                <div className="text-holder">
                  <h3>
                    <a href="/App">
                    Emergency Response App
                    </a>
                  </h3>
                  <p>
                  Send instant alerts to your emergency contacts and access fast support during crises.
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Immediate Medical Attention</li>
                    <li className=""><span className="icon-right-arrow" /> Certified Paramedics</li>
                    <li className=""><span className="icon-right-arrow" /> State-of-the-Art Equipment</li>
                  </ul> */}
                  {/* <div className="btn-box">
                    <a href="/App">
                      Register as a driver <span className="icon-right-arrow" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
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
                    <a href="services-single-1.html">
                    Safety Verification
                    </a>
                  </h3>
                  <p>
                  Track the location of loved ones and receive real-time updates when they're in distress.
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Quick Dispatch</li>
                    <li className=""><span className="icon-right-arrow" /> 24/7 Availability</li>
                    <li className=""><span className="icon-right-arrow" /> Secure Transportation</li>
                  </ul> */}
                  {/* <div className="btn-box">
                  <a href="/App">
                      Download the App <span className="icon-right-arrow" />
                    </a>
                   
                  </div> */}
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
                    <a href="/App">
                      Talk to our Helpline
                    </a>
                  </h3>
                  <p>
                  Need help understanding our app or with an emergency, Reach out to our helpline.
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Emergency Alerts</li>
                    <li className=""><span className="icon-right-arrow" /> Real-Time Tracking</li>
                    <li className=""><span className="icon-right-arrow" /> SOS Button</li>
                  </ul> */}
                  {/* <div className="btn-box">
                  <a href="/Contact">
                    Call our helpline <span className="icon-right-arrow" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            {/*End Single Service Style1*/}
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
                    <a href="#">
                      Bulk User Onboarding
                    </a>
                  </h3>
                  <p>
                  Easily add hundreds of users at once under your organization to gain access to safety features
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Emergency Alerts</li>
                    <li className=""><span className="icon-right-arrow" /> Real-Time Tracking</li>
                    <li className=""><span className="icon-right-arrow" /> SOS Button</li>
                  </ul> */}
                  {/* <div className="btn-box">
                  <a href="/Contact">
                    Call our helpline <span className="icon-right-arrow" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
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
                    <a href="#">
                     Smart Voice Recording 
                    </a>
                  </h3>
                  <p>
                 Press a button for 3+ seconds to record and notify your emergency contacts with audio recordings in real time..
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Emergency Alerts</li>
                    <li className=""><span className="icon-right-arrow" /> Real-Time Tracking</li>
                    <li className=""><span className="icon-right-arrow" /> SOS Button</li>
                  </ul> */}
                  {/* <div className="btn-box">
                  <a href="/Contact">
                    Call our helpline <span className="icon-right-arrow" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
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
                    <a href="#">
                      Daily First Aid Tips
                    </a>
                  </h3>
                  <p>
                 Receive scheduled daily push notifications with life-saving tips in video or text format.
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Emergency Alerts</li>
                    <li className=""><span className="icon-right-arrow" /> Real-Time Tracking</li>
                    <li className=""><span className="icon-right-arrow" /> SOS Button</li>
                  </ul> */}
                  {/* <div className="btn-box">
                  <a href="/Contact">
                    Call our helpline <span className="icon-right-arrow" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
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
                    <a href="#">
                      Subscription Plans
                    </a>
                  </h3>
                  <p>
                  Choose a Solo or Family plan for shared emergency coverage and linked accounts.
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Emergency Alerts</li>
                    <li className=""><span className="icon-right-arrow" /> Real-Time Tracking</li>
                    <li className=""><span className="icon-right-arrow" /> SOS Button</li>
                  </ul> */}
                  {/* <div className="btn-box">
                  <a href="/Contact">
                    Call our helpline <span className="icon-right-arrow" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
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
                    <a href="#">
                     Sticky In-App Notifications
                    </a>
                  </h3>
                  <p>
                 Get critical alerts that stay visible until your emergency is resolved or canceled.
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Emergency Alerts</li>
                    <li className=""><span className="icon-right-arrow" /> Real-Time Tracking</li>
                    <li className=""><span className="icon-right-arrow" /> SOS Button</li>
                  </ul> */}
                  {/* <div className="btn-box">
                  <a href="/Contact">
                    Call our helpline <span className="icon-right-arrow" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
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
                    <a href="#">
                      Blog & Safety Resources
                    </a>
                  </h3>
                  <p>
                Access expert articles, safety guides, and community stories anytime.
                  </p>
                  {/* <ul>
                    <li className=""><span className="icon-right-arrow" /> Emergency Alerts</li>
                    <li className=""><span className="icon-right-arrow" /> Real-Time Tracking</li>
                    <li className=""><span className="icon-right-arrow" /> SOS Button</li>
                  </ul> */}
                  {/* <div className="btn-box">
                  <a href="/Contact">
                    Call our helpline <span className="icon-right-arrow" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
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
                    </div>
                    <div className="text-holder">
                      <div className="sec-title sec-title--style2">
                        <div className="icon">
                          <span className="icon-heartbeat" />
                        </div>
                        <div className="sub-title">
                          <h3>Real Stories, Real Impact</h3>
                        </div>
                        <h2>What They Say</h2>
                      </div>
                      <div className="text">
                        <p>
                        “I was stranded one night with no one to call. RescueTap helped me notify my family immediately and get the support I needed. I can’t imagine life without it.”
                        </p>
                        <h3>
                        Uche <span>- Lagos</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonial Style1*/}
                  {/*Start Single Testimonial Style1*/}
                  <div className="single-testimonial-style1">
                    <div className="img-holder">
                      <img
                        src="assets/images/testimonial/testimonial-v2-2.jpg"
                        alt
                      />
                    </div>
                    <div className="text-holder">
                      <div className="sec-title sec-title--style2">
                        <div className="icon">
                          <span className="icon-heartbeat" />
                        </div>
                        <div className="sub-title">
                          <h3>Real Stories, Real Impact</h3>
                        </div>
                        <h2>What They Say</h2>
                      </div>
                      <div className="text">
                        <p>
                        “This app gave me peace of mind. I feel safer knowing help is just one tap away.”
                        </p>
                        <h3>
                        Ada  <span>- Abuja</span>
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
                  
                  <h2>
                  How We Help You 
                    <br /> Stay Safe
                  </h2>
                </div>
                <div className="text">
                  <p>
                    At RescueTap, our success lies in a seamless blend of
                    innovation, reliability, and compassion. We prioritize rapid
                    response by leveraging cutting-edge technology to ensure
                    help reaches you when it matters most.
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
                        User-Centric Approach
                        <br />
                      </a>
                    </h3>
                    <p>
                      {" "}
                      Our focus is on making emergency response accessible,
                      intuitive, and stress-free for everyone.
                    </p>
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
                        Technology-Driven
                        <br />
                      </a>
                    </h3>
                    <p>
                      Leveraging innovative solutions, we simplify access to
                      ambulances, paramedics, and emergency assistance.
                    </p>
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
                        Speed
                        <br />
                      </a>
                    </h3>
                    <p>
                      Time is critical in emergencies, and our platform is
                      designed to connect you to life-saving services instantly.
                    </p>
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
                        Compassion
                        <br />
                      </a>
                    </h3>
                    <p>
                      {" "}
                      At the heart of RescueTap is a dedication to saving lives
                      and providing peace of mind to those in need.
                    </p>
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
      {/*<section className="partner-area">
        <div className="container">
          <div className="brand-content">
            <div className="inner">
              <ul className="partner-box partner-carousel owl-carousel owl-theme owl-dot-style1 rtl-carousel">
               
                <li className="single-partner-logo-box">
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-logo-1.png"
                      alt="Awesome Image"
                    />
                  </a>
                </li>
               
                <li className="single-partner-logo-box">
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-logo-2.png"
                      alt="Awesome Image"
                    />
                  </a>
                </li>
               
                <li className="single-partner-logo-box">
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-logo-3.png"
                      alt="Awesome Image"
                    />
                  </a>
                </li>
              
                <li className="single-partner-logo-box">
                  <a href="#">
                    <img
                      src="assets/images/brand/brand-logo-4.png"
                      alt="Awesome Image"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>*/}

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
            <div className=" col-xl-5 col-lg-12">
              <div className="slogan-img-box">
                <div
                  className="inner wow slideInLeft "
                  data-wow-delay="400ms"
                  data-wow-duration="3500ms"
                >
                  <img
                    className="float-bob-y  md:ml-[-140px]"
                    src="assets/images/resources/ambulance.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              <div className="slogan-text-box">
                <h2>
                Call our helpline
                 
                </h2>
                <h4>
                  Call anytime <a href="tel:123456789">+234 814 780 6378</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-12">
              <div className="slogan-btn-box">
                <a className="btn-one" href="/Contact">
                  <span className="txt">Call our Helpline</span>
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
          <News />
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
