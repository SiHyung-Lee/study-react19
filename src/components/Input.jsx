import { memo } from "react";

function Input({ id, text, ref, value, error, type = "text", onChange }) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{ display: "inline-block", width: "80px" }}>
        {text}
      </label>
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

export default memo(Input);
