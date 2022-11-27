import InputStyled from "./InputStyled";

interface InputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  type: string;
  autoComplete?: "on" | "off";
}

const Input = ({
  id,
  name,
  placeholder,
  type,
  autoComplete,
}: InputProps): JSX.Element => {
  return (
    <InputStyled
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      className={type}
    />
  );
};

export default Input;
