import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import { mockEmptyReview } from "../../mocks/review/mockReview";
import { mockErrorModal } from "../../mocks/ui/mockErrorModal";
import { mockSuccessModal } from "../../mocks/ui/mockSuccessModal";
import { mockUserInitialState } from "../../mocks/user/mockUser";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import Modal from "./Modal";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.useFakeTimers();

beforeEach(jest.clearAllMocks);

describe("Given a Modal component", () => {
  describe("When it renders with the modal text 'Great success! and isError as false", () => {
    test("The it should show the received text and close after 3 seconds", () => {
      const expectedModalText = "Great success!";

      renderWithProviders(<Modal />, {
        preloadedState: {
          ui: mockSuccessModal,
          user: mockUserInitialState,
          review: mockEmptyReview,
        },
      });

      jest.advanceTimersByTime(3010);

      const modal = screen.queryByText(expectedModalText);
      expect(modal).toBeInTheDocument();
      expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });

  describe("When it renders with modal text 'Fatal error!'", () => {
    test("Then it should show the received text and close after 3 seconds", () => {
      const expectedModalText = "Fatal error!";

      renderWithProviders(<Modal />, {
        preloadedState: {
          ui: mockErrorModal,
          user: mockUserInitialState,
          review: mockEmptyReview,
        },
      });

      jest.advanceTimersByTime(3010);

      const modal = screen.queryByText(expectedModalText);
      expect(modal).toBeInTheDocument();
      expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });
});
