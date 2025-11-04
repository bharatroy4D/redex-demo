import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  // signUpToken localStorage থেকে নিবো (signup response এ পেয়েছিলে)
  const signUpToken = localStorage.getItem("signUpToken");

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      const res = await fetch("https://yourdomain.com/api/v1/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${signUpToken}`, // token পাঠানো লাগবে
        },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();
      console.log(data);

      if (data.status === "OK") {
        alert("✅ Verification successful!");

        // Login token save করো (Backend login response এ access token পাঠাবে)
        localStorage.setItem("accessToken", data.data.accessToken);

        // role ও সংরক্ষণ করো
        localStorage.setItem("role", data.data.user.role);

        // Dashboard redirect
        navigate("/dashboard");
      } else {
        alert(data.message || "OTP verification failed.");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleVerify}
        style={{
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          width: "300px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>OTP Verify</h3>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "14px",
            marginBottom: "14px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;
