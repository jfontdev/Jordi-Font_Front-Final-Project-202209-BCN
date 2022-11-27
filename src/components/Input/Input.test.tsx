import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Input from "./Input";

describe("Given an Input component", () => {
  describe("When it's rendered with the type 'text'", () => {
    test("Then it should render an input element with the type attribute 'text'", () => {
      renderWithProviders(
        <>
          <Input type="text" />
        </>
      );

      const expectedType = "text";

      const input = screen.queryByRole("textbox");

      expect(input).toHaveAttribute("type", expectedType);
    });
  });
});
