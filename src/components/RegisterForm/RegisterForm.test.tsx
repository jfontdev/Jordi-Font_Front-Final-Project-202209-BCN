import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import userEvent from "@testing-library/user-event";
import { mockUserRegister } from "../../mocks/user/mockUser";
import RegisterForm from "./RegisterForm";
import { BrowserRouter } from "react-router-dom";

const mockRegister = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    registerUser: mockRegister,
  });
});

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form with user, email, password inputs and a 'Register' button", () => {
      const userLabel = "Usuario";
      const emailLabel = "Email";
      const passwordLabel = "Contraseña";

      renderWithProviders(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const userInput = screen.queryByRole("textbox", { name: userLabel });

      const passwordInput = screen.getByLabelText(passwordLabel);

      const emailInput = screen.queryByRole("textbox", { name: emailLabel });

      const registerButton = screen.queryByRole("button");

      expect(userInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();

      expect(passwordInput).toBeInTheDocument();
      expect(registerButton).toBeInTheDocument();
    });
  });

  describe("And the 'Register' button is clicked", () => {
    test("Then the form should be sumbitted with a mocked user", async () => {
      const { username, email, password } = mockUserRegister;

      renderWithProviders(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const userInput = screen.queryByLabelText("Usuario")!;
      await userEvent.type(userInput, username);

      const emailInput = screen.queryByLabelText("Email")!;
      await userEvent.type(emailInput, email);

      const passwordInput = screen.queryByLabelText("Contraseña")!;
      await userEvent.type(passwordInput, password);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockRegister).toHaveBeenCalled();
    });
  });
});
