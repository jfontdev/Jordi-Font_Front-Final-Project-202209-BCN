import LoginForm from "../../components/LoginForm/LoginForm";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <h1>Login</h1>
      <LoginForm />
    </HomePageStyled>
  );
};

export default HomePage;
