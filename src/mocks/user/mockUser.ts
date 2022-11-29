import {
  UserCredentials,
  UserRegisterCredentials,
  UserState,
} from "../../types/types";

export const mockUserLogin: UserCredentials = {
  username: "user1",
  password: "123456",
};

export const mockUserRegister: UserRegisterCredentials = {
  username: "user1",
  password: "123456",
  email: "user1@gmail.com",
};

export const mockRegisteredUser: UserRegisterCredentials = {
  username: "user5",
  password: "654321",
  email: "user5@gmail.com",
};

export const mockUserInitialState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};
