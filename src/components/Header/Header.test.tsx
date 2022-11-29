import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should contain a heading with level 2 heading 'MovieRating'", () => {
      const expectedHeading = {
        level: 2,
        name: "MovieRating",
      };

      renderWithProviders(<Header />);

      const header = screen.queryByRole("heading", expectedHeading);

      expect(header).toHaveAccessibleName(expectedHeading.name);
    });
  });
});
