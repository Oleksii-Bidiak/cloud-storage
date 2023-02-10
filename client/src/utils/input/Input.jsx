import React from "react";
import "./input.scss";

export const Input = ({ type, placeholder, value, setValue }) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      placeholder={placeholder}
    />
  );
};
