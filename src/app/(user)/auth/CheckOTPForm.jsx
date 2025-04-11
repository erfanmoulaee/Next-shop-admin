import React from "react";
import OTPInput from "react-otp-input";
import { HiArrowNarrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

function CheckOTPForm({ onSubmit, otp, setOtp, onBack, time, onResendOtp, OtpResponse, isCheckingOtp }) {
  return (
    <div>
      <button onClick={onBack} className="mb-4">
        <HiArrowNarrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {OtpResponse && (
        <p>
          {OtpResponse.message}{" "}
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-secondary-900" />
          </button>
        </p>
      )}
      <div className="mb-4">{time > 0 ? <p>{time} ثانیه تا ارسال مجدد کد</p> : <button onClick={onResendOtp}>ارسال مجدد کد </button>}</div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <p className="font-bold">کد تائید را وارد کنید </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} renderSeparator={<span>-</span>} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />

        {isCheckingOtp ? (
          <p>...loading</p>
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تائید
          </button>
        )}
      </form>
    </div>
  );
}

export default CheckOTPForm;
