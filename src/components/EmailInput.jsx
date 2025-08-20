import { memo } from "react";

function EmailInput({ error, idRef, id, domain, onChangeEmail, onChangeDomain }) {
  const domains = ["gmail.com", "naver.com", "daum.net", "nate.com"];

  return (
    <div>
      <label
        htmlFor="id"
        style={{ display: "inline-block", width: "80px" }}>
        아이디
      </label>
      <input
        ref={idRef}
        type="text"
        id="id"
        value={id}
        onChange={onChangeEmail}
      />
      {error && <div>{error}</div>}
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
  );
}

export default memo(EmailInput);
