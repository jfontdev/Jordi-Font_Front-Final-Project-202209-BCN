import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/renderWithProviders";
import AddReviewForm from "./AddReviewForm";
import { mockAddReview } from "../../mocks/review/mockReview";

const mockAddReviewAction = jest.fn();

jest.mock("../../hooks/useReview/useReview", () => {
  return () => ({
    createReview: mockAddReviewAction,
  });
});

describe("Given a AddReviewForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form with title, reviewText, rating, favoriteScene inputs and a 'Añadir' button", () => {
      const titleLabel = "Titulo";
      const reviewTextLabel = "Reseña";
      const ratingLabel = "Calificación";
      const favoriteSceneLabel = "Escena favorita";

      renderWithProviders(
        <BrowserRouter>
          <AddReviewForm />
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

  describe("And the 'Register' button is clicked", () => {
    test("Then the form should be sumbitted with a mocked user", async () => {
      const { title, reviewText, rating, favoriteScene } = mockAddReview;

      const titleLabel = "Titulo";
      const reviewTextLabel = "Reseña";
      const ratingLabel = "Calificación";
      const favoriteSceneLabel = "Escena favorita";

      renderWithProviders(
        <BrowserRouter>
          <AddReviewForm />
        </BrowserRouter>
      );

      const titleInput = screen.queryByLabelText(titleLabel)!;
      await userEvent.type(titleInput, title);

      const reviewTextInput = screen.queryByLabelText(reviewTextLabel)!;
      await userEvent.type(reviewTextInput, reviewText);

      const ratingInput = screen.queryByLabelText(ratingLabel)!;
      await userEvent.type(ratingInput, rating);

      const favoriteSceneInput = screen.queryByLabelText(favoriteSceneLabel)!;
      await userEvent.type(favoriteSceneInput, favoriteScene);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockAddReviewAction).toHaveBeenCalled();
    });
  });
});
