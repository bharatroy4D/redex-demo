import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyOtpMutation } from "../context/features/authApi";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();


 const handleSubmit = async (e) => {
  e.preventDefault();


  try {
    // ✅ backend expects token, NOT signUpToken
    const result = await verifyOtp({ otp}).unwrap();

    if (result?.status === "OK") {
          
      alert("✅ OTP Verified Successfully");
      navigate("/login");
    }

  } catch (error) {
    console.log(error);
    alert(error?.data?.message || "Invalid OTP ❌");
  }
};


  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[300px] p-6 border rounded-lg shadow"
      >
        <h2 className="text-center text-lg font-semibold">Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border px-3 py-2 mt-4 rounded"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white py-2 mt-4 rounded"
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;
