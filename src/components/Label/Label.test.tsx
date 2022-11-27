import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Input from "../Input/Input";
import Label from "./Label";

describe("Given a Label component", () => {
  describe("When it's rendered with 'Password' text as a children element", () => {
    test("Then it should render a Label with 'Password' text inside", () => {
      renderWithProviders(
        <>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </>
      );

      const label = screen.getByLabelText("Password");

      expect(label).toBeInTheDocument();
    });
  });
});
