import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it's rendered with the text 'Login'", () => {
    test("Then it should return a button with the text 'Login'", () => {
      const expectedText = "Login";

      render(<Button text="Login" action={() => {}} type="submit" />);

      const button = screen.queryByRole("button");

      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it rendered with an action 'buttonAction'", () => {
    test("Then it should call that action onClick", async () => {
      const buttonAction = jest.fn();

      render(<Button text="" action={buttonAction} type="button" />);
      const renderedButton = screen.queryByRole("button");

      await userEvent.click(renderedButton!);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
