import { renderHook } from "@testing-library/react";
import mockLocalStorage from "../../mocks/localStorage/mockLocalStorage";
import {
  mockRegisteredUser,
  mockUserRegister,
} from "../../mocks/user/mockUser";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/usersSlice/usersSlice";
import { store } from "../../redux/store";
import MakeWrapper from "../../testUtils/MakeWrapper";
import { JwtPayloadCustom } from "../../types/types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("jwt-decode", () => {
  return () =>
    ({ id: "23456asdsadsad", username: "user123" } as JwtPayloadCustom);
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

beforeAll(() => {
  mockLocalStorage.setItem("token", "token");
});

describe("Given the useUser custom hook", () => {
  describe("When its method logoutUser is called", () => {
    test("Then it should call dispatch with logoutUserActionCreator", async () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: MakeWrapper,
      });

      await logoutUser();

      expect(dispatchSpy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });

  describe("When its method loginUser is called", () => {
    test("Then it should call dispatch with a loginUserActionCreator and return the token", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: MakeWrapper,
      });

      const user = {
        username: "user123",
        password: "123456",
      };

      const expectedUser = {
        username: "user123",
        id: "23456asdsadsad",
        token: "token",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(expectedUser)
      );

      expect(mockLocalStorage.getItem("token")).toBe(expectedUser.token);
    });
  });

  describe("When a method registerUser is called", () => {
    test("Then it should call dispatch openModelActionCreator with the text 'Bienvenid@! Ahora estas registrad@.'", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: MakeWrapper,
      });

      const newUser = mockUserRegister;
      const modal = "Bienvenid@! Ahora estas registrad@.";

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(openModalActionCreator(modal));
    });

    describe("And it receives an already registered user", () => {
      test("Then it should call dispatch openModalActionCreator with the text 'Usuario ya registrado'", async () => {
        const {
          result: {
            current: { registerUser },
          },
        } = renderHook(() => useUser(), {
          wrapper: MakeWrapper,
        });

        const newUser = mockRegisteredUser;
        const modal = "Usuario ya registrado";

        await registerUser(newUser);

        expect(dispatchSpy).toHaveBeenCalledWith(openModalActionCreator(modal));
      });
    });
  });
});
