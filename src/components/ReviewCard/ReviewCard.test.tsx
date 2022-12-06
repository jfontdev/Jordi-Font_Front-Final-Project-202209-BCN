import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import { mockReviews } from "../../mocks/review/mockReview";
import ReviewCard from "./ReviewCard";

const mockDeleteReview = jest.fn();

jest.mock("../../hooks/useReview/useReview", () => {
  return () => ({
    deleteReview: mockDeleteReview,
  });
});

describe("Given a ReviewCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a review with an image that have an attribute src and a review title 'Maravillosa'", () => {
      const expectedReviewTitle = "Maravillosa";
      const expectedReviewScene =
        "../../../images/Piratas Del Caribe La Maldicion De La Perla Negra.webp";

      renderWithProviders(
        <BrowserRouter>
          <ReviewCard
            id=""
            title={expectedReviewTitle}
            review="Siempre la recordaréis como la película que convirtió a Johnny Depp en una superestrella y casi le hace ganar un Oscar. El hecho de que no ganara no es un problema, ya que gracias a él esta es la mejor película de piratas jamás realizada."
            rating={10}
            favoriteScene={expectedReviewScene}
          />
        </BrowserRouter>
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

  describe("And a button with a text 'Borrar' with an action to delete a review", () => {
    test("Then the action should be dispatched when the user clicks the button", async () => {
      const expectedReviewButton = "Borrar";

      renderWithProviders(
        <BrowserRouter>
          <ReviewCard
            id={mockReviews[0]._id}
            title=""
            review=""
            rating={0}
            favoriteScene=""
          />
        </BrowserRouter>
      );

      const reviewButton = screen.queryByRole("button", {
        name: expectedReviewButton,
      })!;

      await userEvent.click(reviewButton);

      expect(reviewButton).toBeInTheDocument();
      expect(mockDeleteReview).toHaveBeenCalled();
    });
  });
});
