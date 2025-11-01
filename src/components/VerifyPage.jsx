import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function VerifyPage() {
  const [search] = useSearchParams();
  const email = search.get("email");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const res = await axios.post('/authentication_app/verify_otp/', { email, otp });
      alert("✅ Login Verified");
      navigate("/dashboard");
    } catch (err) {
      alert("❌ Wrong OTP");
    }
  };

  return (
    <div>
      <h2>Enter OTP sent to: {email}</h2>
      <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
      <button onClick={handleVerify}>Verify & Login</button>
    </div>
  );
}
