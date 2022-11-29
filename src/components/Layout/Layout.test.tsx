import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it renders", () => {
    test("Then it should render a Header with a level 2 heading 'MovieRating'", () => {
      const expectedHeading = {
        level: 2,
        name: "MovieRating",
      };

      renderWithProviders(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );

      const header = screen.queryByRole("heading", expectedHeading);

      expect(header).toHaveAccessibleName(expectedHeading.name);
    });
  });
});
