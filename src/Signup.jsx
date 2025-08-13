import { useState, useRef } from "react";
import Input from "./components/Input";
import EmailInput from "./components/EmailInput";

function Signup() {
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [id, setId] = useState("");
  const [domain, setDomain] = useState("gmail.com");
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);
  const phoneRef = useRef(null);

  const onChangeEmail = (e) => {
    setId(e.target.value);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  const onLogin = () => {
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
  };

  const fullDomain = `${id}@${domain}`;

  return (
    <>
      <div>
        <EmailInput
          error={errors.idError}
          idRef={idRef}
          id={id}
          onChangeEmail={onChangeEmail}
          domain={domain}
          onChangeDomain={onChangeDomain}
        />
        <Input
          text="비밀번호"
          id="password"
          type="password"
          value={password}
          errors={errors.passwordError}
          ref={passwordRef}
        />
        <Input
          text="닉네임"
          id="nickname"
          value={nickname}
          errors={errors.nicknameError}
          ref={nicknameRef}
        />
        <Input
          text="전화번호"
          id="phone"
          type="tel"
          value={phone}
          errors={errors.phoneError}
          ref={phoneRef}
        />
        <button onClick={onLogin}>회원가입</button>
      </div>
      <div>로그인</div>
    </>
  );
}

export default Signup;
