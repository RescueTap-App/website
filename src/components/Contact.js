"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "@/constants/api";
import "react-toastify/dist/ReactToastify.css";

const AMB = `${BASE_URL}/ambulance-booking`;

const Contact = () => {
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
    }
  };

  return (
    <>
      <ToastContainer />
      <div>
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-area-bg"
            style={{
              backgroundImage: "url(assets/images/breadcrumb/breadcrumb-7.jpg)",
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
                    <h2>Contact</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End breadcrumb area*/}
        {/*Start Contact Info Style2 Area*/}
        <section className="contact-info-style2-area">
          <div className="container">
            <div className="row text-right-rtl">
              <div className="col-xl-6">
                <div className="contact-info-style2__image">
                  <div className="inner">
                    <img
                      src="assets/images/resources/contact-info-style2__image.jpg"
                      alt="contact info"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-info-style1__content">
                  <div className="sec-title">
                    <div className="icon">
                      <span className="icon-heartbeat" />
                    </div>
                    <div className="sub-title">
                      <h3>Contact us</h3>
                    </div>
                    <h3>
                      Need an ambulance?
                      <br />
                      Reach Out to Us Anytime!
                    </h3>
                  </div>
                  <div className="inner-content">
                    <div className="text">
                      <p>
                        We’re here to assist you. Whether you have questions,
                        need support, or want to partner with us, feel free to
                        get in touch.
                      </p>
                    </div>
                    <h3>Emails:</h3>
                    <div className="text">
                      <p>
                        For Support from RescueTap reach out to
                        <br />
                        <a href="mailto:support@rescuetap.com">
                          support@rescuetap.com
                        </a>
                      </p>
                      <p>
                        For more information reach out to
                        <br />
                        <a href="mailto:info@rescuetap.com">
                          info@rescuetap.com
                        </a>
                      </p>
                      <p>
                        For emergencies reach out to
                        <br />
                        <a href="mailto:emergency@rescuetap.com">
                          emergency@rescuetap.com
                        </a>
                      </p>
                    </div>
                    <h3>
                      <br /> <br />
                      Phone Numbers
                    </h3>
                    <div className="text">
                      <p>
                        Abuja: <a href="tel:+2347025692629">+2347025692629</a>
                      </p>
                      <p>
                        Lagos: <a href="tel:+2348147806378">+2348147806378</a>
                      </p>
                    </div>
                    Office Hours: 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Contact Info Style2 Area*/}
        {/*Start Main Contact Form Area*/}
        <section className="main-contact-form-area py-12">
          <div className="container mx-auto max-w-4xl">
            <div className="sec-title text-center mb-8">
              <div className="icon mb-4">
                <span className="icon-heartbeat text-red-600 text-4xl" />
              </div>
              <h3 className="text-gray-600 text-lg">
                Fill out the form below to book an ambulance for an event, and
                we’ll respond promptly.
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
                        value="advance"
                        checked={formData.serviceType === "advance"}
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
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#FF3333] text-white py-2 px-6 rounded-lg hover:bg-black ${
                    loading ? "cursor-not-allowed opacity-70" : ""
                  }`}
                >
                  {loading ? "Booking..." : "Book Ambulance"}
                </button>
              </div>
            </form>
          </div>
        </section>
        {/*End Main Contact Form Area*/}
        {/*Start Google Map Style2 Area*/}
        <section className="google-map-area">
          <div className="auto-container">
            <div className="contact-page-map-outer">
              <div
                className="map-canvas"
                data-zoom={12}
                data-lat="-37.817085"
                data-lng="144.955631"
                data-type="roadmap"
                data-hue="#ffc400"
                data-title="Envato"
                data-icon-path="assets/images/icon/map-marker.png"
                data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
              ></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
