import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import { mockReviews } from "../../mocks/review/mockReview";
import ReviewDetail from "./ReviewDetail";

describe("Given a ReviewDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a review with an image that have an attribute src and a review title 'Maravillosa'", () => {
      const expectedReviewTitle = "abc";
      const expectedReviewScene = "abc.jpg";

      renderWithProviders(
        <BrowserRouter>
          <ReviewDetail review={mockReviews[0]} />
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
});
