import { renderHook } from "@testing-library/react";
import mockLocalStorage from "../../mocks/localStorage/mockLocalStorage";
import mockInitialStore from "../../mocks/stores/mockInitialStore";
import { loginUserActionCreator } from "../../redux/features/usersSlice/usersSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import { User } from "../../types/types";
import useToken from "./useToken";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockUser: User = {
  username: "admin",
  id: "id",
  token: "tokentest",
};

jest.mock("jwt-decode", () => {
  return () => ({
    id: mockUser.id,
    username: mockUser.username,
    token: mockUser.token,
  });
});

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

beforeAll(() => {
  mockLocalStorage.setItem("token", "tokentest");
});

afterAll(() => {
  mockLocalStorage.clear();
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given a useToken custom hook", () => {
  describe("When it's method getToken is invoked and there is a token 'tokentest' in local storage", () => {
    test("Then it should call dispatch with a login user action", () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(mockUser)
      );
    });
  });

  describe("When it's method removeToken is called and there is a token 'tokentest' in localStorage", () => {
    test("Then it should remove the token from localStorage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      removeToken();

      expect(mockLocalStorage.getItem("token")).toBe(undefined);
    });
  });
});
