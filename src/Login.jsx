import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const counterRef = useRef(0);
  const [domain, setDomain] = useState("gmail.com");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const domains = ["gmail.com", "naver.com", "daum.net", "nate.com"];
  const navigate = useNavigate();

  console.log("App", id);
  console.log(errors);
  const onChangeEmail = (e) => {
    setId(e.target.value);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => {
    counterRef.current++;
    if (!id?.trim()) {
      setErrors({ idError: "아이디를 입력해주세요." });
      idRef.current?.focus();
      return;
    }
    if (!password?.trim()) {
      setErrors({ passwordError: "비밀번호를 입력해주세요." });
      passwordRef.current?.focus();
      return;
    }
    setErrors({});
    console.log(fullDomain, password);
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            ref={idRef}
            type="text"
            id="id"
            value={id}
            onChange={onChangeEmail}
          />
          {errors.idError && <div>{errors.idError}</div>}
          {domain === "" ? null : <span>@</span>}
          <select
            value={domain}
            onChange={onChangeDomain}>
            {domains.map((d) => {
              return (
                <option
                  key={d}
                  value={d}>
                  {d}
                </option>
              );
            })}
            <option value="">직접입력</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />

          {errors.passwordError && <div>{errors.passwordError}</div>}
          <button onClick={onLogin}>로그인</button>
        </div>
      </div>
      <div>count: {counterRef.current}</div>
      <button onClick={() => navigate("/signup")}>회원가입</button>
    </>
  );
}

export default Login;
