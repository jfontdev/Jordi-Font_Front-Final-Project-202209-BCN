import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import Register from "./Register";

describe("Given a Register page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form with user, email, password inputs and a 'Register' button", () => {
      const userLabel = "Usuario";
      const emailLabel = "Email";
      const passwordLabel = "Contraseña";

      renderWithProviders(
        <BrowserRouter>
          <Register />
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
});
