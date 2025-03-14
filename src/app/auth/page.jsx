"use client";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import http from "@/services/httpService";

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    //call getOTP API
    try {
      const data = await http.post("/user/get-otp", { phoneNumber });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <SendOtpForm phoneNumber={phoneNumber} onchange={phoneNumberHandler} onSubmit={sendOTPHandler} />
      </div>
    </div>
  );
}

export default AuthPage;
