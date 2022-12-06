import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import Detail from "./Detail";

describe("Given a Detail page", () => {
  describe("When its rendered", () => {
    test("Then it should show a Review component", () => {
      const expectedReviewTitle = "Reseña";

      renderWithProviders(
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      );

      const reviewTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedReviewTitle,
      });

      expect(reviewTitle).toBeInTheDocument();
    });
  });
});
