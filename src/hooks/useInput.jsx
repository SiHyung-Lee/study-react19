import { useState, useRef } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const ref = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, ref, onChange];
}

export default useInput;
