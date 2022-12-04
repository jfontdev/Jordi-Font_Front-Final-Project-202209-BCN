import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import CreateReview from "./CreateReview";

describe("Given a CreateReview page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form with title, reviewText, rating, favoriteScene inputs and a 'Añadir' button", () => {
      const titleLabel = "Titulo";
      const reviewTextLabel = "Reseña";
      const ratingLabel = "Calificación";
      const favoriteSceneLabel = "Escena favorita";

      renderWithProviders(
        <BrowserRouter>
          <CreateReview />
        </BrowserRouter>
      );

      const titleInput = screen.queryByRole("textbox", { name: titleLabel });

      const reviewTextInput = screen.getByLabelText(reviewTextLabel);

      const ratingInput = screen.queryByRole("textbox", { name: ratingLabel });

      const favoriteSceneInput = screen.queryByRole("textbox", {
        name: favoriteSceneLabel,
      });

      const addReviewButton = screen.queryByRole("button");

      expect(titleInput).toBeInTheDocument();
      expect(reviewTextInput).toBeInTheDocument();

      expect(ratingInput).toBeInTheDocument();
      expect(favoriteSceneInput).toBeInTheDocument();
      expect(addReviewButton).toBeInTheDocument();
    });
  });
});
