import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { mockReviews } from "../../mocks/review/mockReview";
import { loadReviewsActionCreator } from "../../redux/features/reviewsSlice/reviewsSlice";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import MakeWrapper from "../../testUtils/MakeWrapper";
import useReview from "./useReview";

beforeEach(() => {
  jest.clearAllMocks();
});

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
});
