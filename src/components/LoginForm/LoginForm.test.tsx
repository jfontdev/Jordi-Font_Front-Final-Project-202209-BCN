import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import { mockUserLogin } from "../../mocks/user/mockUser";
import LoginForm from "./LoginForm";

const mockLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    loginUser: mockLogin,
  });
});

describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form with user and password inputs and a 'Login' button", () => {
      const userLabel = "Usuario";
      const passwordLabel = "Contraseña";

      renderWithProviders(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );

      const userInput = screen.queryByRole("textbox", { name: userLabel });

      const passwordInput = screen.getByLabelText(passwordLabel);

      const loginButton = screen.queryByRole("button");

      expect(userInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("And 'Login' button is clicked", () => {
    test("Then the form should be sumbitted", async () => {
      const { username, password } = mockUserLogin;

      renderWithProviders(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );

      const userInput = screen.queryByLabelText("Usuario")!;
      await userEvent.type(userInput, username);

      const passwordInput = screen.queryByLabelText("Contraseña")!;
      await userEvent.type(passwordInput, password);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockLogin).toHaveBeenCalled();
    });
  });
});
