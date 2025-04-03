"use client";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "@/services/authService";
import CheckOTPForm from "./CheckOTPForm";

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(2);
  const {
    data,
    isPending,
    error,
    mutateAsync: mutategetOtp,
  } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: mutateCheckOtp } = useMutation({
    mutationFn: checkOtp,
  });

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    //call getOTP API
    try {
      const data = await mutategetOtp({ phoneNumber });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const CheckOtpHandler = async (e) => {
    e.preventDefault();
    //call checkOTP API
    try {
      const data = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOtpForm phoneNumber={phoneNumber} onchange={phoneNumberHandler} onSubmit={sendOTPHandler} isLoading={isPending} />;
      case 2:
        return <CheckOTPForm onSubmit={CheckOtpHandler} otp={otp} setOtp={setOtp} />;
      default:
        return null;
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">{renderStep()}</div>
    </div>
  );
}

export default AuthPage;
