import { getRandomUser } from "../../factories/userFactory";
import { UserState } from "../../types/types";

export const mockUserStateLogged: UserState = {
  ...getRandomUser(),
  isLogged: true,
};
