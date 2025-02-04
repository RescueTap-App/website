"use client"


import React from "react";
// import PaystackPop from '@paystack/inline-js'

const https = require('https')

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "500000"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer sk_test_9749ce6a96efc0405098b98a5b9766ce35641fad',
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

req.write(params)
req.end()


async function bookAmbulance(){
  
  const driverData = {
    fullname: document.getElementById('formName').value,
    email: document.getElementById('email').value,
    formEvent: document.getElementById('formEvent').value,
    formAddress: document.getElementById('formAddress').value,
    formDate: document.getElementById('formDate').value,
    formTime: document.getElementById('formTime').value,
    formService: document.getElementById('formService').value,
};


   // Book an Ambulance
   const response = await fetch(DRIVER_API, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${getAuthToken()}`
    },
    body: JSON.stringify(driverData)
});

}
const Ambulance = () => {
  return (
    <>
      <div>
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-area-bg"
            style={{
              backgroundImage: "url(assets/images/breadcrumb/breadcrumb-2.jpg)",
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
                        <a href="/">Home</a>
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
                          <a
                              download="RescueTap_Brochure.pdf"
                              href="https://www.canva.com/design/DAGdeL6msb4/AHUvdPTymRiO6eUWQw9C2A/view?utm_content=DAGdeL6msb4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he59a8aab9e"
                           target="_blank"
                            >
                              View our Broucher
                            </a>
                            {/* <button onClick={} >Download our Broucher</button> */}
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
                      “Fast and Reliable Ambulance Services—Because Every Second
                      Counts!”
                    </p>
                    <p>
                      We provide 24/7 access to fully equipped ambulances
                      designed to handle medical emergencies with speed and
                      efficiency. Our vehicles are strategically positioned to
                      ensure faster response times, no matter where you are.
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
                            <span className="icon-right-arrow" /> Quick Dispatch
                          </h4>
                          <p>
                            Get an ambulance at your location within minutes.
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
                            <span className="icon-right-arrow" /> Certified EMTs
                          </h4>
                          <p>
                            Skilled professionals ready to handle emergencies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-box2">
                    <div className="row">
                      <div className="col-xl-6">
                        <div
                          className="text-box2-single"
                          data-aos="fade-left"
                          data-aos-easing="linear"
                          data-aos-duration={2500}
                        >
                          <h4>
                            <span className="icon-right-arrow" />
                            Hygienic Interiors
                          </h4>
                          <p>Safe and comfortable transport for patients.</p>
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
                            <span className="icon-right-arrow" /> GPS-Enabled
                            Navigation
                          </h4>
                          <p>Faster routes to hospitals and care centers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-box4">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="content-box">
                          <h2>Equipment Includes</h2>

                          <ul>
                            <li>
                              <span className="icon-checked" /> Stretcher and
                              Spine Board
                            </li>
                            <li>
                              <span className="icon-checked" /> Oxygen Tanks and
                              Masks
                            </li>
                            <li>
                              <span className="icon-checked" /> Suction Machines
                            </li>
                            <li>
                              <span className="icon-checked" /> IV Kits and
                              Medication Storage
                            </li>
                            <li>
                              <span className="icon-checked" /> Trauma Kits and
                              First Aid Supplies
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="img-box">
                          <img
                            src="assets/images/services/service-details-img5.jpg"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Service Details Content */}
            </div>
            <div className="sec-title text-center">
                      <div className="icon">
                        <span className="icon-heartbeat" />
                      </div>
                      <div className="sub-title">
                        <h3>
                          Fill out the form below to book an ambulance for an
                          event, and we’ll respond promptly.
                        </h3>
                      </div>
                      {/* <h2>Registration as a Driver</h2> */}
                      <h2>Book An Ambulance</h2>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-form">
                          <form
                            id="contact-form"
                            name="contact_form"
                            className="default-form2"
                            action="assets/inc/sendmail.php"
                            method="post"
                          >
                            <div className="row">
                              <div className="col-xl-6">
                                <div className="form-group">
                                  <div className="input-box">
                                    <input
                                      type="text"
                                      name="form_name"
                                      id="formName"
                                      placeholder="Full Name"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="form-group">
                                  <div className="input-box">
                                    <input
                                      type="email"
                                      name="form_email"
                                      id="formEmail"
                                      placeholder="Email Address"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-6">
                                <div className="form-group">
                                  <div className="input-box">
                                    <input
                                      type="text"
                                      name="form_event"
                                      id="formEvent"
                                      placeholder="Event Name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="form-group">
                                  <div className="input-box">
                                    <input
                                      type="text"
                                      name="form_address"
                                      id="formAddress"
                                      placeholder="Address"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* New date, time, and dropdown fields */}
                            <div className="row">
                              <div className="col-xl-6 ">
                                <div className="form-group bg-[#F2F3FA] p-1 pl-4 pt-1 font-medium">
                                  <div className="input-box ">
                                    {/* <label htmlFor="formDate">Date:</label> */}
                                    <input
                                      type="date"
                                      name="form_date"
                                      id="formDate"
                                      required
                                      className="bg-[#F2F3FA]"
                                      placeholder="Date"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="form-group bg-[#F2F3FA] p-1 pl-4">
                                  <div className="input-box">
                                    <input
                                      type="time"
                                      name="form_time"
                                      id="formTime"
                                      className="bg-[#F2F3FA]"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="w-[100%] bg-[#F2F3FA]">
                                <div className=" w-[100%] bg-black">
                                  <div className=" w-[100%]">
                                    {/* <label htmlFor="formService">Service Type:</label> */}
                                    <select
                                      name="form_service"
                                      id="formService"
                                      required
                                      className=" w-[100%] bg-black"
                                      
                                    >
                                      <option
                                        className="w-[100%] bg-black"
                                        value=""
                                      >
                                        Select Service Type{" "}
                                      </option>
                                      <option value="basic">
                                        Fully kiited bus with paramedics (VVIP)-
                                        N200,000
                                      </option>
                                      <option
                                        value="advanced"
                                        className="bg-[#F2F3FA]"
                                      >
                                        Fully kiited bus without Paramedics
                                        (VIP) - N160,000
                                      </option>
                                      <option value="event-standby">
                                        Fully kiited Sienna with Paramedics
                                        (Advanced) - N150,000
                                      </option>
                                      <option value="event-standby">
                                        Fully kiited Sienna without Paramedics
                                        (Basic)- N130,000
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Message field */}
                            {/* <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <div className="input-box">
                            <textarea
                              name="form_message"
                              id="formMessage"
                              placeholder="Write a Message"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}
                            {/* Submit button */}
                            <div className="row">
                              <div className="col-xl-12 text-center">
                                <div className="button-box">
                                  <input
                                    id="form_botcheck"
                                    name="form_botcheck"
                                    className="form-control"
                                    type="hidden"
                                  />
                                  <button
                                    className="btn-one"
                                    // type="submit"
                                    type="button"
                                    data-loading-text="Please wait..."
                                    // onClick={bookAmbulance}
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal"
                                  >
                                    <span className="txt">Send a Message</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
          </div>
        </section>
      </div>


      {/* Kept the modal away */}
     
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Card Payment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div>

          </div>
        </form>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <button type="button" class="btn btn-primary">Pay</button> */}
        <div className="button-box">
                                  <input
                                    id="form_botcheck"
                                    name="form_botcheck"
                                    className="form-control"
                                    type="hidden"
                                  />
                                  <button
                                    className="btn-one"
                                    type="submit"
                                    // type="button"
                                    data-loading-text="Please wait..."
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal"
                                  >
                                    <span className="txt">Pay</span>
                                  </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Ambulance;
