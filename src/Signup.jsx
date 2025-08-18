import { useState } from "react";
import Input from "./components/Input";
import EmailInput from "./components/EmailInput";
import useInput from "./hooks/useInput";
import useEmailInput from "./hooks/useEmailInput";

function Signup() {
  const [nickname, nicknameRef, onChangeNickname] = useInput("");
  const [phone, phoneRef, onChangePhone] = useInput("");
  const [password, passwordRef, onChangePassword] = useInput("");
  const [errors, setErrors] = useState({});
  const [id, domain, idRef, onChangeEmail, onChangeDomain] = useEmailInput();

  const fullDomain = `${id}@${domain}`;

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

  return (
    <>
      <div>
        <EmailInput
          error={errors.idError}
          idRef={idRef}
          id={id}
          domain={domain}
          onChangeEmail={onChangeEmail}
          onChangeDomain={onChangeDomain}
        />
        <Input
          text="비밀번호"
          id="password"
          type="password"
          value={password}
          errors={errors.passwordError}
          ref={passwordRef}
          onChange={onChangePassword}
        />
        <Input
          text="닉네임"
          id="nickname"
          value={nickname}
          errors={errors.nicknameError}
          ref={nicknameRef}
          onChange={onChangeNickname}
        />
        <Input
          text="전화번호"
          id="phone"
          type="tel"
          value={phone}
          errors={errors.phoneError}
          ref={phoneRef}
          onChange={onChangePhone}
        />
        <button onClick={onLogin}>회원가입</button>
      </div>
      <div>로그인</div>
    </>
  );
}

export default Signup;
