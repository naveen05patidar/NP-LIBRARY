import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [mobile, setMobile] = useState('');
  const [otp, setOTP] = useState('');
  const [showOTPField, setShowOTPField] = useState(false);

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/sendOTP', { mobile })
      .then((response) => {
        setShowOTPField(true);
        alert('OTP sent successfully! Please check your mobile for the OTP.');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send OTP. Please try again.');
      });
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to verify OTP on the server-side
    alert('Logged in successfully!');
  };

  return (
    <div>
      <h2>Login</h2>
      {!showOTPField ? (
        <form onSubmit={handleMobileSubmit}>
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleOTPSubmit}>
          <input
            type="text"
            placeholder="Enter the OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button type="submit">Submit OTP</button>
        </form>
      )}
    </div>
  );
}

export default Login;