"use client";

import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate, useLocation, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { BASE_URL } from "../constants/api";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setIsLoading(true);

    try {
      const authResponse = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, password }),
      });

      const authData = await authResponse.json();

      if (authResponse.ok) {
        const userId = authData.user._id;
        const email = authData.user.email;

        // Check subscription status
        const subscriptionResponse = await fetch(
          `${BASE_URL}/subscriptions/active/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authData.token}`,
            },
          }
        );

        const subscriptionData = await subscriptionResponse.json();
        
        if (subscriptionData.isActive) {
          // User has active subscription
          navigate('/dashboard');
        } else {
          // Redirect to subscription page with user data
          navigate('/subscription', {
            state: {
              userId,
              email,
              token: authData.token
            }
          });
        }
      } else {
        setLoginError(authData?.message || "Invalid phone number or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 md:p-8 md:w-[50%]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Log In</h2>
      {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
        >
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

const Subscription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, email, token } = location.state || {};
  
  const publicKey = "pk_live_ceaed3a309858b2da78c5f7c4dfddccb7863d268";
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubscriptionSuccessful, setIsSubscriptionSuccessful] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaystackSuccess = async (reference) => {
    setIsProcessing(true);
    try {
      const response = await fetch(`${BASE_URL}/subscriptions/create-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          amount: String(selectedPlan === 'monthly' ? 60000 : 500000),
          status: 'success',
          reference: String(reference),
          subscriptionPlan: selectedPlan,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsSubscriptionSuccessful(true);
      } else {
        setSubscriptionError(data?.message || "Failed to complete subscription");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscriptionError("An error occurred during subscription");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaystackClose = () => {
    alert("Payment was not completed. Please try again.");
  };

  const handleModalOkay = () => {
    setIsSubscriptionSuccessful(false);
    navigate('/dashboard');
  };

  const yearlyPaymentConfig = {
    reference: `yearly_${new Date().getTime()}`,
    email: email,
    amount: "500000",
    publicKey,
    text: "Subscribe to Yearly Plan",
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
  };

  const monthlyPaymentConfig = {
    reference: `monthly_${new Date().getTime()}`,
    email: email,
    amount: "60000",
    publicKey,
    text: "Subscribe to Monthly Plan",
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
  };

  const paymentConfig = selectedPlan === "yearly" 
    ? yearlyPaymentConfig 
    : selectedPlan === "monthly" 
    ? monthlyPaymentConfig 
    : null;

  if (!userId || !email) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Redirecting to login...</p>
      </div>
    );
  }

  return (
    <section className="team-style1-area">
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-red-600 py-6 px-8 text-center text-white">
            <h2 className="text-2xl font-semibold">Choose Your Subscription</h2>
            <p className="mt-2">Please subscribe to continue using our service</p>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <button
                  onClick={() => setSelectedPlan("yearly")}
                  className={`w-full text-left ${selectedPlan === "yearly" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"} font-semibold py-4 px-6 rounded-md`}
                >
                  <div className="flex justify-between items-center">
                    <span>Yearly Plan</span>
                    <span>₦5,000</span>
                  </div>
                  <p className="text-sm mt-1 text-gray-600">Save 20% compared to monthly</p>
                </button>
              </div>

              <div>
                <button
                  onClick={() => setSelectedPlan("monthly")}
                  className={`w-full text-left ${selectedPlan === "monthly" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"} font-semibold py-4 px-6 rounded-md`}
                >
                  <div className="flex justify-between items-center">
                    <span>Monthly Plan</span>
                    <span>₦600</span>
                  </div>
                  <p className="text-sm mt-1 text-gray-600">Flexible monthly subscription</p>
                </button>
              </div>

              {paymentConfig ? (
                <PaystackButton
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md w-full disabled:opacity-50"
                  disabled={isProcessing}
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

        {/* Success Modal */}
        {isSubscriptionSuccessful && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <h3 className="text-xl font-semibold mb-4">Subscription Successful!</h3>
              <p className="mb-6">Thank you for subscribing. You now have full access to our services,Proceed to the App to Login</p>
             
            </div>
          </div>
        )}

        {/* Error Message */}
        {subscriptionError && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Subscription Error</h3>
              <p className="mb-6">{subscriptionError}</p>
              <button
                onClick={() => setSubscriptionError(null)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

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
        onSignupSuccess(data._id, formData.email);
      } else {
        console.error("Signup failed:", data);
        alert(`Signup failed: ${data?.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 md:p-8 md:w-[50%]">
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
        onVerificationSuccess(data.token);
      } else {
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
            className="bg-red-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-1/2"
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

const AuthChoice = ({ onShowSignup, onShowLogin }) => (
  <section className="team-style1-area">
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up or Log in
          </h2>
        </div>
        <div className="space-y-4">
          <button
            onClick={onShowSignup}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign Up
          </button>
          <button
            onClick={onShowLogin}
            className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  </section>
);

const SignupFlow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAuthChoice, setShowAuthChoice] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const handleShowSignup = () => {
    setShowAuthChoice(false);
    setShowSignup(true);
    setShowLogin(false);
    setUserId(null);
    setUserEmail(null);
  };

  const handleShowLogin = () => {
    setShowAuthChoice(false);
    setShowLogin(true);
    setShowSignup(false);
    setUserId(null);
    setUserEmail(null);
  };

  const handleSignupSuccess = (newUserId, email) => {
    setUserId(newUserId);
    setUserEmail(email);
    setShowSignup(false);
  };

  const handleVerificationSuccess = (token) => {
    navigate('/subscription', {
      state: {
        userId: userId,
        email: userEmail,
        token: token
      }
    });
  };

  const handleGoBack = () => {
    setShowAuthChoice(true);
    setShowSignup(false);
    setShowLogin(false);
    setUserId(null);
    setUserEmail(null);
  };

  // Check if we're coming from login with subscription required
  useEffect(() => {
    if (location.pathname === '/subscription') {
      setShowAuthChoice(false);
      setShowSignup(false);
      setShowLogin(false);
    }
  }, [location]);

  if (showAuthChoice) {
    return <AuthChoice onShowSignup={handleShowSignup} onShowLogin={handleShowLogin} />;
  }

  if (showSignup) {
    return (
      <section className="team-style1-area">
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-16 lg:px-8">
          <SignupForm onSignupSuccess={handleSignupSuccess} />
        </div>
      </section>
    );
  }

  if (showLogin) {
    return (
      <section className="team-style1-area">
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-16 lg:px-8">
          <LoginForm />
        </div>
      </section>
    );
  }

  if (userId && !location.pathname.includes('subscription')) {
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

  return null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/subscription" element={<Subscription />} />
        <Route path="*" element={<SignupFlow />} />
      </Routes>
    </Router>
  );
};

export default App;