"use client";

import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/api";
import { BrowserRouter as Router } from "react-router-dom";

const SignupForm = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        onSignupSuccess(data._id, formData.email); // Pass the user ID and email
      } else {
        // Handle signup error
        console.error("Signup failed:", data);
        alert(`Signup failed: ${data?.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

const OtpVerification = ({ userId, onVerificationSuccess, onResend }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/verifyToken/${otp}?id=${userId}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (response.ok) {
        onVerificationSuccess();
      } else {
        // Handle verification failure (e.g., display error message)
        console.error("OTP verification failed:", data);
        alert(`OTP verification failed: ${data?.message || "Invalid OTP."}`);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      alert("An error occurred during OTP verification.");
    }
  };

  return (
    <section className="team-style1-area">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Verify OTP</h2>
        <p className="text-gray-700 mb-4">
          Please enter the OTP sent to your email/phone number.
        </p>
        <div className="mb-4">
          <label
            htmlFor="otp"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            OTP:
          </label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleVerify}
            className="bg-red-600  text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-1/2"
          >
            Verify OTP
          </button>
          <button
            onClick={() => onResend(userId)}
            className="border-red-600 border text-black font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-1/2"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </section>
  );
};

const Subscription = ({ userEmail, userId }) => {
  const navigate = useNavigate();
  const publicKey = "pk_live_ceaed3a309858b2da78c5f7c4dfddccb7863d268"; // Replace with your actual key
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubscriptionSuccessful, setIsSubscriptionSuccessful] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState(null);

  const handlePaystackSuccess = async (reference) => {
    console.log("Payment successful:", reference);

    if (userId && selectedPlan) {
      try {
        const response = await fetch(`${BASE_URL}/subscriptions/create-subscription`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            userId: userId, // Use the userId prop directly
            amount: selectedPlan === 'monthly' ? 60000 : 500000,
            status: 'success',
            reference: reference,
            subscriptionPlan: selectedPlan, // Ensure selectedPlan is "monthly" or "yearly"
          }).toString(),
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Subscription data sent to server:", data);
          setIsSubscriptionSuccessful(true); // Show success modal
        } else {
          console.error("Failed to update subscription on server:", data);
          setSubscriptionError(`Failed to finalize subscription: ${data?.message || "Something went wrong."}`);
        }
      } catch (error) {
        console.error("Error sending subscription data to server:", error);
        setSubscriptionError("An error occurred while finalizing subscription.");
      }
    } else {
      console.warn("User ID or selected plan not available after successful payment.");
      setSubscriptionError("Could not finalize subscription. Please try again.");
    }
  };

  const handlePaystackClose = () => {
    console.log("Payment closed.");
    alert("Payment was not completed.");
  };

  const handleModalOkay = () => {
    setIsSubscriptionSuccessful(false);
    navigate("/Subscription"); // Or wherever you want to redirect after successful subscription
  };

  const yearlyPaymentConfig = {
    reference: `yearly_${new Date().getTime()}`,
    email: userEmail,
    amount: 500000,
    publicKey,
    text: "Confirm yearly Plan",
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
    metadata: {
      custom_fields: []
    }
  };

  const monthlyPaymentConfig = {
    reference: `monthly_${new Date().getTime()}`,
    email: userEmail,
    amount: 60000,
    publicKey,
    text: "Confirm Monthly Plan",
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
    metadata: {
      custom_fields: []
    }
  };

  const getPaymentConfig = () => {
    if (selectedPlan === "yearly") return yearlyPaymentConfig;
    if (selectedPlan === "monthly") return monthlyPaymentConfig;
    return null;
  };

  const paymentConfig = getPaymentConfig();

  return (
    <section className="team-style1-area">
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-red-600 py-6 px-8 text-center text-white">
              <h2 className="text-2xl font-semibold">Choose Your Subscription</h2>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <button
                  type="button"
                  className={`w-full ${selectedPlan === "yearly" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"} font-semibold py-4 px-6 rounded-md`}
                  onClick={() => setSelectedPlan("yearly")} // Corrected to "yearly"
                >
                  yearly Plan - ₦5,000
                </button>

                <button
                  type="button"
                  className={`w-full ${selectedPlan === "monthly" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"} font-semibold py-4 px-6 rounded-md`}
                  onClick={() => setSelectedPlan("monthly")}
                >
                  Monthly Plan - ₦600
                </button>

                {paymentConfig ? (
                  <PaystackButton
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md w-full"
                    {...paymentConfig}
                  />
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-md w-full cursor-not-allowed"
                  >
                    Please select a plan
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {isSubscriptionSuccessful && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl w-96">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Subscription Successful!</h3>
              <p className="text-gray-700 mb-4">
                Your subscription was successful. You can now log in to the app.
              </p>
              <div className="text-right">
                <button
                  onClick={handleModalOkay}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {subscriptionError && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl w-96">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Subscription Error</h3>
              <p className="text-red-700 mb-4">{subscriptionError}</p>
              <div className="text-right">
                <button
                  onClick={() => setSubscriptionError(null)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ResendOtp = async (userId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/resendOtp/${userId}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    if (response.ok) {
      alert("OTP resent successfully! Please check your email/phone.");
    } else {
      console.error("Failed to resend OTP:", data);
      alert(
        `Failed to resend OTP: ${data?.message || "Please try again later."}`
      );
    }
  } catch (error) {
    console.error("Error resending OTP:", error);
    alert("An error occurred while resending OTP.");
  }
};

const SignupFlow = () => {
  const [userId, setUserId] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [userEmail, setUserEmail] = useState(null); // Add state for user email

  const handleSignupSuccess = (newUserId, email) => { // Modify to receive email
    setUserId(newUserId);
    setUserEmail(email); // Store the email
  };

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  if (!userId) {
    return (
      <section className="team-style1-area">
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <SignupForm onSignupSuccess={handleSignupSuccess} /> {/* Ensure SignupForm now calls handleSignupSuccess with the email */}
        </div>
      </section>
    );
  }

  if (userId && !isVerified) {
    return (
      <section className="team-style1-area">
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <OtpVerification
            userId={userId}
            onVerificationSuccess={handleVerificationSuccess}
            onResend={ResendOtp}
          />
        </div>
      </section>
    );
  }
  if (isVerified && userEmail && userId) { // Ensure userId is also available
    return <Subscription userEmail={userEmail} userId={userId} />;
  }

  return null; // Should not reach here
};

const App = () => {
  return (
    <Router>
      <SignupFlow />
    </Router>
  );
};

export default App;