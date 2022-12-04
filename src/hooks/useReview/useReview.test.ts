import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { mockCreateReview, mockReviews } from "../../mocks/review/mockReview";
import {
  deleteReviewActionCreator,
  loadReviewsActionCreator,
} from "../../redux/features/reviewsSlice/reviewsSlice";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import MakeWrapper from "../../testUtils/MakeWrapper";
import useReview from "./useReview";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a useReview custom hook", () => {
  describe("When its method loadReviews is invoked", () => {
    test("Then it should call the dispatch with the action and a list of reviews", async () => {
      const {
        result: {
          current: { loadReviewsList },
        },
      } = renderHook(() => useReview(), {
        wrapper: MakeWrapper,
      });

      await act(async () => await loadReviewsList());
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          loadReviewsActionCreator(mockReviews)
        )
      );
    });
  });

  describe("When its method loadReviews is invoked and it fails", () => {
    test("Then it should call the dispatch with openModal and the error 'Esta película aún no tiene reseñas.'", async () => {
      const {
        result: {
          current: { loadReviewsList },
        },
      } = renderHook(() => useReview(), {
        wrapper: MakeWrapper,
      });

      const expectedError = {
        isError: true,
        message: "Esta película aún no tiene reseñas.",
      };

      await act(async () => await loadReviewsList());
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(expectedError)
        )
      );
    });
  });

  describe("When its method deleteReview is invoked", () => {
    test("Then it should call the dispatch with the action and delete one review", async () => {
      const {
        result: {
          current: { deleteReview },
        },
      } = renderHook(() => useReview(), {
        wrapper: MakeWrapper,
      });

      const { _id } = mockReviews[0];

      await act(async () => await deleteReview(_id));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(deleteReviewActionCreator(_id))
      );
    });
  });

  describe("When its method deleteReview is invoked and it fails", () => {
    test("Then it should call the dispatch with openModal and the error 'No puedes borrar en estos momentos!'", async () => {
      const {
        result: {
          current: { deleteReview },
        },
      } = renderHook(() => useReview(), {
        wrapper: MakeWrapper,
      });

      const { _id } = mockReviews[0];

      await deleteReview(_id);

      const expectedError = {
        isError: true,
        message: "No puedes borrar en estos momentos!",
      };

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(expectedError)
      );
    });
  });

  describe("When its method createReview is called with a successful review creation", () => {
    test("Then it should call the dispatch with openModal with the text 'Reseña creada'", async () => {
      const {
        result: {
          current: { createReview },
        },
      } = renderHook(() => useReview(), {
        wrapper: MakeWrapper,
      });
      const newReview = mockCreateReview;
      const expectedMessage = {
        isError: false,
        message: "Reseña creada",
      };

      await act(async () => await createReview(newReview));

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(expectedMessage)
        );
      });
    });
  });

  describe("When its method createReview is called and it fails", () => {
    test("Then it should call the dispatch with openModal with the text 'No puedes crear reseñas ahora mismo.'", async () => {
      const {
        result: {
          current: { createReview },
        },
      } = renderHook(() => useReview(), {
        wrapper: MakeWrapper,
      });
      const newReview = mockCreateReview;
      const expectedMessage = {
        isError: true,
        message: "No puedes crear reseñas ahora mismo.",
      };

      await act(async () => await createReview(newReview));

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(expectedMessage)
        );
      });
    });
  });
});
