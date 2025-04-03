import React from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm({ onSubmit, otp, setOtp }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <p>کد تائید را وارد کنید </p>
        <OTPInput value={otp} onChange={setOtp} numInputs={6} renderSeparator={<span>-</span>} renderInput={(props) => <input {...props} />} />
        <button type="submit" className="btn btn--primary w-full">
          تائید
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
