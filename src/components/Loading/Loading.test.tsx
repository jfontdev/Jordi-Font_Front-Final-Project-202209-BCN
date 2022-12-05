import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it renders the loader", () => {
    test("Then it should render a spinning movie reel load with an aria-label 'A spinning object that looks like an old movie reel'", () => {
      const expectedAriaLabel =
        "A spinning object that looks like an old movie reel";

      renderWithProviders(<Loading />);

      const loader = screen.queryByLabelText(expectedAriaLabel);

      expect(loader).toBeInTheDocument();
    });
  });
});
