import TextField from "@/common/TextField";

function SendOtpForm({ phoneNumber, onchange, onSubmit }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField label="شماره موبایل" name="phoneNumber" value={phoneNumber} onChange={onchange} />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تائید
        </button>
      </form>
    </div>
  );
}

export default SendOtpForm;
