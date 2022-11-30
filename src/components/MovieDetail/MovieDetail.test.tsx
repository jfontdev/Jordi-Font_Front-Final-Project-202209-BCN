import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import MovieDetail from "./MovieDetail";

describe("Given a MovieDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should display an image with alt text 'Pirates of the caribbean movie poster' and a movie title 'Piratas del Caribe'", () => {
      const expectedMovieTitle = "Piratas del Caribe";
      const expectedMoviePoster = "Pirates of the caribbean movie poster";

      renderWithProviders(<MovieDetail />);

      const movieTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedMovieTitle,
      });
      const moviePoster = screen.getByAltText(expectedMoviePoster);

      expect(movieTitle).toBeInTheDocument();
      expect(moviePoster).toBeInTheDocument();
    });
  });
});
