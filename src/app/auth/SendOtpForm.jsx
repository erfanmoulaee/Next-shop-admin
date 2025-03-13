import TextField from "@/common/TextField";

function SendOtpForm({ phoneNumber, onchange }) {
  return (
    <div>
      <form>
        <TextField label="شماره موبایل" name="phoneNumber" value={phoneNumber} onChange={onchange} />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default SendOtpForm;
