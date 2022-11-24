export interface User {
  username: string;
  id: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
