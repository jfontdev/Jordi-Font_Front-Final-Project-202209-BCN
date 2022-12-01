import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import ReviewCard from "./ReviewCard";

describe("Given a ReviewCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a review with an image that have an attribute src and a review title 'Maravillosa'", () => {
      const expectedReviewTitle = "Maravillosa";
      const expectedReviewScene =
        "../../../images/Piratas Del Caribe La Maldicion De La Perla Negra.webp";

      renderWithProviders(
        <ReviewCard
          title={expectedReviewTitle}
          review="Siempre la recordaréis como la película que convirtió a Johnny Depp en una superestrella y casi le hace ganar un Oscar. El hecho de que no ganara no es un problema, ya que gracias a él esta es la mejor película de piratas jamás realizada."
          rating={10}
          favoriteScene={expectedReviewScene}
        />
      );

      const reviewTitle = screen.getByRole("heading", {
        level: 2,
        name: expectedReviewTitle,
      });
      const reviewScene = screen.getByRole("img");

      expect(reviewTitle).toBeInTheDocument();
      expect(reviewScene).toHaveAttribute("src", expectedReviewScene);
    });
  });
});
