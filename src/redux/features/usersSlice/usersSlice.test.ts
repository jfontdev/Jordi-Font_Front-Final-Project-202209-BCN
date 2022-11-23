import { getRandomUser } from "../../../factories/userFactory";
import { mockUserStateLogged } from "../../../mocks/state/mockUserStateLogged";
import { mockUserStateNotLogged } from "../../../mocks/state/mockUserStateNotLogged";
import { UserState } from "../../../types/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./usersSlice";

describe("Given a userReducer", () => {
  describe("When it receives the initial state with an unknow action", () => {
    test("Then it should return a copy of the initial state", () => {
      const unknownAction = {
        type: "user/unknown",
      };

      const newState = userReducer(mockUserStateNotLogged, unknownAction);

      expect(newState).toStrictEqual(mockUserStateNotLogged);
    });
  });

  describe("When it receives the initial state with a login user action with a new user", () => {
    test("Then it should return the state with the user credentials and isLogged to be true", () => {
      const newUser = getRandomUser();
      const expectedState: UserState = {
        ...newUser,
        isLogged: true,
      };
      const newState = userReducer(
        mockUserStateLogged,
        loginUserActionCreator(newUser)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives the initial state with a logged user and a logout action", () => {
    test("Then it should return the state with initial state", () => {
      const expectedState = mockUserStateNotLogged;

      const newState = userReducer(
        mockUserStateLogged,
        logoutUserActionCreator
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
