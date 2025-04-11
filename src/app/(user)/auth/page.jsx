"use client";
import { useEffect, useState } from "react";
import SendOtpForm from "./SendOtpForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "@/services/authService";
import CheckOTPForm from "./CheckOTPForm";
import { useRouter } from "next/navigation";

const RESENT_TIME = 90;

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(RESENT_TIME);
  const router = useRouter();
  const {
    data: OtpResponse,
    isPending,
    error,
    mutateAsync: mutategetOtp,
  } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: mutateCheckOtp, isPending: isCheckingOtp } = useMutation({
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
      setStep(2);
      setTime(RESENT_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const CheckOtpHandler = async (e) => {
    e.preventDefault();
    //call checkOTP API
    try {
      const { message, user } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((s) => s - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOtpForm phoneNumber={phoneNumber} onchange={phoneNumberHandler} onSubmit={sendOTPHandler} isLoading={isPending} />;
      case 2:
        return (
          <CheckOTPForm
            isCheckingOtp={isCheckingOtp}
            OtpResponse={OtpResponse}
            onResendOtp={sendOTPHandler}
            time={time}
            onBack={() => setStep((s) => s - 1)}
            onSubmit={CheckOtpHandler}
            otp={otp}
            setOtp={setOtp}
          />
        );
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
