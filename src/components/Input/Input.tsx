import React from "react";
import InputStyled from "./InputStyled";

interface InputProps {
  classname?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  type: string;
  autoComplete?: "on" | "off";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  name,
  placeholder,
  type,
  autoComplete,
  onChange,
  classname,
}: InputProps): JSX.Element => {
  return (
    <InputStyled
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      className={classname}
      onChange={onChange}
    />
  );
};

export default Input;
