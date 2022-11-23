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
