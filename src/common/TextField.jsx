function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor="" className="block mb-4">
        {label}
      </label>
      <input type="text" name={name} id={name} value={value} onChange={onChange} className="textField__input" />
    </div>
  );
}

export default TextField;
