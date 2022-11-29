import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterStyled from "./RegisterStyled";

const Register = (): JSX.Element => {
  return (
    <RegisterStyled>
      <h1>Registro</h1>
      <RegisterForm />
    </RegisterStyled>
  );
};

export default Register;
