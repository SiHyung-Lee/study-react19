import { useState, useRef, useCallback } from "react";

function useEmailInput() {
  const [id, setId] = useState("");
  const [domain, setDomain] = useState("gmail.com");
  const idRef = useRef(null);

  const onChangeEmail = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangeDomain = useCallback((e) => {
    setDomain(e.target.value);
  }, []);

  return [id, domain, idRef, onChangeEmail, onChangeDomain];
}

export default useEmailInput;
