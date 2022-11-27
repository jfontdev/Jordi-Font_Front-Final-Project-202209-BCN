import React, { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../types/types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };
    loginUser(formDataToSubmit);
  };

  return (
    <LoginFormStyled className="form" onSubmit={(event) => handleSubmit(event)}>
      <Label classname="form_label" htmlFor="username">
        Usuario
      </Label>
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="Usuario"
        onChange={handleFormChange}
        autoComplete="off"
      />
      <Label classname="form_label" htmlFor="password">
        Contraseña
      </Label>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Contraseña"
        onChange={handleFormChange}
        autoComplete="off"
      />
      <Button className="btn--dark" text="Login" type="submit" />
    </LoginFormStyled>
  );
};

export default LoginForm;
