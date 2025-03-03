"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "@/constants/api";
import "react-toastify/dist/ReactToastify.css";
import { PaystackButton } from "react-paystack";
import { PaystackKey } from "@/constants/paystackKey";


const AMB = `${BASE_URL}/ambulance-booking`;

let amount;

const Ambulance = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    event: "",
    address: "",
    serviceType: "",
    eventDate: "",
    eventTime: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debug form data
    console.log("Submitting data:", formData);

    if (!formData.serviceType.trim()) {
      toast.error("Please select a service type.");
      return;
    }

    if (!formData.eventDate || !formData.eventTime) {
      toast.error("Please provide a date and time for the booking.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(AMB, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 || response.status === 201) {
        toast.success("Ambulance booked successfully!");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          event: "",
          serviceType: "",
          address: "",
          eventDate: "",
          eventTime: "",
        });
      }
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response);
        toast.error(
          error.response.data?.message ||
            "Failed to book ambulance. Please try again."
        );
      } else if (error.request) {
        console.error("Network Error:", error.request);
        toast.error("Network error. Please check your connection.");
      } else {
        console.error("Error:", error.message);
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (formData.serviceType === "basic"){
    amount = 18000000
  }else if(formData.serviceType === "advanced") {
    amount = 20000000
  }else if(formData.serviceType === "vip"){
    amount = 22000000
  }else if(formData.serviceType === "vvip"){
    amount = 25000000
  }

  const componentProps = {
    email: formData.email,
    amount: amount,
    serviceType: formData.serviceType,
    // onsubmit: handleSubmit(),
    text: loading ? "Booking .....": "Paid and Booked",
    onSuccess: ({ reference }) => {
      
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      )},
      onClose: ({reference}) => {
        handleSubmit()
        // alert("Wait! You need this oil, don't go!!!!")
        console.log(`Your reference is ${reference} `)
      },
    currency: "NGN",
    publicKey: PaystackKey,
  //   meta: {
  //     name: formData.fullName,
  //     phone: formData.phoneNumber,
  //     description: `Schedule Appointment Payment at ${amount} for ${serviceType} minutes`,
  // },
  }
console.log(amount)



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
                    <h2>Ambulance Dispatch Services</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li className="active">Ambulance Dispatch Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                          Ambulance Dispatch Services{" "}
                          <span className="icon-next-1" />
                        </a>
                      </li>

                      <li>
                        <a href="/ALS">
                          Advanced Life Support (ALS){" "}
                          <span className="icon-next-1" />
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
                          Driver Registration & Ride Safety Verification
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
                      Download our online Brochure to get detailed information
                      on our vehicle registration and ambulance services.
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
                              View our Brochure
                            </a>
                            {/* <button onClick={} >Download our Brochure</button> */}
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
                    <h2>Ambulance Dispatch Services</h2>
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

            <ToastContainer />

            <section className="main-contact-form-area py-12">
              <div className="container mx-auto max-w-4xl">
                <div className="sec-title text-center mb-8">
                  <div className="icon mb-4">
                    <span className="icon-heartbeat text-red-600 text-4xl" />
                  </div>
                  <h3 className="text-gray-600 text-lg">
                    Fill out the form below to book an ambulance for an event,
                    and we’ll respond promptly.
                  </h3>
                  <h2 className="text-3xl font-bold text-gray-800 mt-4">
                    Book an Ambulance
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 shadow-lg rounded-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full px-4 py-2 bg-gray-100 border rounded-lg"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-2 bg-gray-100 border rounded-lg"
                    />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-2 bg-gray-100 border rounded-lg"
                    />
                    <input
                      type="text"
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      placeholder="Event Name"
                      className="w-full px-4 py-2 bg-gray-100 border rounded-lg"
                    />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Address"
                      className="w-full px-4 py-2 bg-gray-100 border rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">Select Service Type:</p>
                      <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="serviceType"
                            value="vvip"
                            checked={formData.serviceType === "vvip"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Fully kitted bus with paramedics (VVIP)
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="serviceType"
                            value="vip"
                            checked={formData.serviceType === "vip"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Fully kitted bus without paramedics (VIP)
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="serviceType"
                            value="advanced"
                            checked={formData.serviceType === "advanced"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Sienna with paramedics (Advanced)
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="serviceType"
                            value="basic"
                            checked={formData.serviceType === "basic"}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Sienna without paramedics (Basic)
                        </label>
                      </div>
                    </div>

                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-100 border rounded-lg"
                    />
                    <input
                      type="time"
                      name="eventTime"
                      value={formData.eventTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-100 border rounded-lg"
                    />
                  </div>
                  <div className="text-center mt-8">
                    {/* <button
                      type="submit"
                      disabled={loading}
                      className={`bg-[#FF3333] text-white py-2 px-6 rounded-lg hover:bg-black ${
                        loading ? "cursor-not-allowed opacity-70" : ""
                      }`}
                    >
                      {loading ? "Booking..." : "Book Ambulance"}
                    </buttonaa> */}
                      <PaystackButton 
                      // type="submit"
                      className={`bg-[#FF3333] text-white py-2 px-6 rounded-lg hover:bg-black ${
                        loading ? "cursor-not-allowed opacity-70" : ""
                      }`} 
                      {...componentProps}/>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* Kept the modal away */}

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Card Payment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div></div>
              </form>
            </div>
            <div className="modal-footer">
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
