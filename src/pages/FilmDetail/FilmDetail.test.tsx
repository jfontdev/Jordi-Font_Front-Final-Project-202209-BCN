import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import FilmDetail from "./FilmDetail";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Given a FilmDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should display an image with alt text 'Pirates of the caribbean movie poster' and a movie title 'Piratas del Caribe'", () => {
      const expectedMovieTitle = "Piratas del Caribe";
      const expectedMoviePoster = "Pirates of the caribbean movie poster";

      renderWithProviders(<FilmDetail />);

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
