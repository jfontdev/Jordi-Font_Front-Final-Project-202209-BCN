import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  className?: string;
  type: "submit" | "button" | "reset";
}

const Button = ({
  text,
  action,
  className,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} className={className} type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
