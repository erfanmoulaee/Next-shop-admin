import TextField from "@/common/TextField";

function SendOtpForm({ phoneNumber, onchange, onSubmit, isLoading }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField label="شماره موبایل" name="phoneNumber" value={phoneNumber} onChange={onchange} />
        <div>
          {isLoading ? (
            <p>...loading</p>
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تائید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOtpForm;
