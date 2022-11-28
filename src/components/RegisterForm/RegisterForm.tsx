import React, { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserRegisterCredentials } from "../../types/types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();

  const initialFormData: UserRegisterCredentials = {
    username: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserRegisterCredentials = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    registerUser(formDataToSubmit);
  };

  return (
    <RegisterFormStyled
      className="form"
      onSubmit={(event) => handleSubmit(event)}
    >
      <Label classname="form_label" htmlFor="username">
        Usuario
      </Label>
      <Input
        type="text"
        name="username"
        id="username"
        onChange={handleFormChange}
        placeholder="Usuario"
        autoComplete="off"
      />
      <Label classname="form_label" htmlFor="email">
        Email
      </Label>
      <Input
        type="email"
        name="email"
        id="email"
        onChange={handleFormChange}
        placeholder="Email"
        autoComplete="off"
      />
      <Label classname="form_label" htmlFor="password">
        Contraseña
      </Label>
      <Input
        type="password"
        name="password"
        id="password"
        onChange={handleFormChange}
        placeholder="Contraseña"
        autoComplete="off"
      />
      <Button className="btn--dark" type="submit" text="Registrate" />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
