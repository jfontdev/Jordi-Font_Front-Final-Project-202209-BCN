import TestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import renderWithProviders from "../../mocks/renderWithProviders";
import { screen, waitFor } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("With path '/*', it should render NotFoundPage'", () => {
      const expectedApp = TestRenderer.create(
        <MemoryRouter initialEntries={["/*"]}>
          <App />
        </MemoryRouter>
      );
      expect(expectedApp).toMatchSnapshot();
    });
  });
});

describe("When it's rendered with path '/film-detail'", () => {
  test("Then it should show the film detail page", async () => {
    const filmDetailPath = "/film-detail";
    const expectedHeadingText = "MovieRating";
    const expectedHeadingLevel = 2;

    renderWithProviders(
      <MemoryRouter initialEntries={[filmDetailPath]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});

describe("When it's rendered with path '/review-detail/:idReview'", () => {
  test("Then it should show the review detail page", async () => {
    const DetailPath = "/review-detail/:idReview";
    const expectedHeadingText = "MovieRating";
    const expectedHeadingLevel = 2;

    renderWithProviders(
      <MemoryRouter initialEntries={[DetailPath]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
