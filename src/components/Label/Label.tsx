import LabelStyled from "./LabelStyled";

interface LabelProps {
  children: JSX.Element | string;
  htmlFor?: string;
  classname?: string;
}

const Label = ({ children, htmlFor, classname }: LabelProps): JSX.Element => {
  return (
    <LabelStyled htmlFor={htmlFor} className={classname}>
      {children}
    </LabelStyled>
  );
};

export default Label;
