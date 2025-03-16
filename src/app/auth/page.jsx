"use client";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import http from "@/services/httpService";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "@/services/authService";

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    //call getOTP API
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
