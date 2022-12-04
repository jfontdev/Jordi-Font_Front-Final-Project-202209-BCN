import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../mocks/renderWithProviders";
import { mockEmptyReview } from "../../mocks/review/mockReview";
import { mockErrorModal } from "../../mocks/ui/mockErrorModal";
import { mockSuccessModal } from "../../mocks/ui/mockSuccessModal";
import { mockUserInitialState } from "../../mocks/user/mockUser";
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

  describe("When is rendered with isOpen state as true and isError state as false", () => {
    test("Then it should show a Modal component with modal success text 'Great success!'", () => {
      const modalSuccess = "Great success!";

      renderWithProviders(<Layout />, {
        preloadedState: {
          ui: mockSuccessModal,
          user: mockUserInitialState,
          review: mockEmptyReview,
        },
      });

      const modal = screen.queryByText(modalSuccess);

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When is rendered with isOpen state as true and isError state as true", () => {
    test("Then it should show a Modal component with a modal error text 'Fatal error!'", () => {
      const modalError = "Fatal error!";

      renderWithProviders(<Layout />, {
        preloadedState: {
          ui: mockErrorModal,
          user: mockUserInitialState,
          review: mockEmptyReview,
        },
      });

      const modal = screen.queryByText(modalError);

      expect(modal).toBeInTheDocument();
    });
  });
});
