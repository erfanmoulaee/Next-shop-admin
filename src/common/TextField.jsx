function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor="" className="block">
        {label}
      </label>
      <input type="text" name={name} id={name} value={value} onChange={onChange} className="bg-gray-50 p-2 rounded-sm" />
    </div>
  );
}

export default TextField;
