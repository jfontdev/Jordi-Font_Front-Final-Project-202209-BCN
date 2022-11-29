import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import HomePage from "./HomePage";

describe("Given a Homepage page", () => {
  describe("When its rendered", () => {
    test("Then it should display a form with user and password inputs and a 'Login' button", () => {
      const userLabel = "Usuario";
      const passwordLabel = "Contraseña";

      renderWithProviders(
        <BrowserRouter>
          <HomePage />
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
});
