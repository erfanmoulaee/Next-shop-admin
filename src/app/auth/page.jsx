"use client";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <div className="flex justify-center ">
      <div className="w-full sm:max-w-sm">
        <SendOtpForm phoneNumber={phoneNumber} onchange={phoneNumberHandler} />
      </div>
    </div>
  );
}

export default AuthPage;
