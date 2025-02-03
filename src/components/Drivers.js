"use client";

import { getDrivers, registerDriver } from "@/service/driverService";
import React, { useEffect, useState } from "react";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [newDriver, setNewDriver] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    vehicleModel: "",
    plateNumber: "",
    licenseNumber: "",
  });

  // Fetch drivers on component load
  useEffect(() => {
    async function fetchDrivers() {
      try {
        const data = await getDrivers();
        setDrivers(data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    }
    fetchDrivers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDriver((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerDriver(newDriver);
      alert("Driver registered successfully!");
      setNewDriver({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        vehicleModel: "",
        plateNumber: "",
        licenseNumber: "",
      });
      const updatedDrivers = await getDrivers();
      setDrivers(updatedDrivers);
    } catch (error) {
      alert("Failed to register driver");
    }
  };

  return (
    <>
      <div>
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-area-bg"
            style={{
              backgroundImage: "url(assets/images/breadcrumb/breadcrumb-11.jpg)",
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
                    <h2>Driver Registration and Ride Verification</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li className="active">
                        Driver Registration and Ride Verification
                      </li>
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
                      <li>
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
                      <li className="active">
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
                          "url(assets/images/sidebar/sidebar-info-box-bg2.jpg)",
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
                              href="RescueTap_Brochure.pdf"
                            >
                              Download our Broucher
                            </a>
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
                      src="assets/images/services/service-details-3-img4.jpg"
                      alt
                    />
                  </div>
                  <div className="text-box1">
                    <h2>Driver Registration and Ride Verification</h2>
                    <p>Safe Rides, Trusted Drivers—Your Safety Comes First!</p>
                    <p>
                      At RescueTap, we prioritize safety and reliability by
                      carefully vetting every driver before they join our
                      network. Our streamlined yet comprehensive registration
                      process ensures only qualified and verified drivers
                      operate under RescueTap.
                    </p>
                  </div>

                  <div className="container">
                    <div className="sec-title text-center">
                      <div className="icon">
                        <span className="icon-heartbeat" />
                      </div>
                      <div className="sub-title">
                        <h3>
                          Fill out the form below to register as a driver, and
                          we’ll respond promptly.
                        </h3>
                      </div>
                      <h2>Driver Registration Form</h2>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-form">
                          <form onSubmit={handleSubmit}>
                            <div>
                              <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={newDriver.firstName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={newDriver.lastName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={newDriver.phoneNumber}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={newDriver.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                name="vehicleModel"
                                placeholder="Vehicle Model"
                                value={newDriver.vehicleModel}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                name="plateNumber"
                                placeholder="Plate Number"
                                value={newDriver.plateNumber}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                name="licenseNumber"
                                placeholder="License Number"
                                value={newDriver.licenseNumber}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div
                              className="info-download-box mt-[5%]"
                              data-aos="slide-up"
                              data-aos-easing="linear"
                              data-aos-duration={1000}
                            >
                              <ul>
                                <li>
                                  <div className="title">
                                    <h5 className="flex items-center justify-center">
                                      <button type="submit">
                                        Register Driver
                                      </button>
                                    </h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Service Details Content */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Drivers;
