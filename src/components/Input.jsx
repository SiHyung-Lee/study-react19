import { useState } from "react";

function Input({ id, text = 'text', ref, error, type }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input
        ref={ref}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />

      {error && <div>{error}</div>}
    </div>
  );
}

export default Input;
