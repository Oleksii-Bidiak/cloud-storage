import React, { useState } from "react";
import { registration } from "../../actions/user";
import { Input } from "../../utils/input/Input";
import "./authorization.scss";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="authorization">
      <div className="authorization__header">Реєстрація</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введіть email"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введіть пароль"
      />
      <button
        className="authorization__btn"
        onClick={() => registration(email, password)}>
        Зареєструватись
      </button>
    </div>
  );
};
