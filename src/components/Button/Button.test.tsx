import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it's rendered with the text 'Login'", () => {
    test("Then it should return a button with the text 'Login'", () => {
      const expectedText = "Login";

      render(<Button text="Login" action={() => {}} />);

      const button = screen.queryByRole("button");

      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it rendered with an action 'buttonAction'", () => {
    test("Then it shoudl call that action onClick", async () => {
      const buttonAction = jest.fn();

      render(<Button text="" action={buttonAction} />);
      const renderedButton = screen.queryByRole("button");

      await userEvent.click(renderedButton!);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
