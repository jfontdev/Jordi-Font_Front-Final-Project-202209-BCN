import { mockReviewToDelete } from "../../../mocks/review/mockReview";
import { mockReviewList } from "../../../mocks/review/mockReviewList";
import {
  createReviewActionCreator,
  deleteReviewActionCreator,
  loadReviewsActionCreator,
  reviewsReducer,
  initialState,
} from "./reviewsSlice";
import { Reviews, ReviewsState } from "./types";

describe("Given the reviewsReducer", () => {
  describe("When it is invoked and receives an initial state and a loadReviews action with a list of one review", () => {
    test("Then should return a new state with the received list", () => {
      const expectedReviewList: Reviews = [
        {
          title: "",
          reviewText: "",
          rating: 10,
          favoriteScene: "",
        },
      ];
      const expectedReviewState: ReviewsState = {
        reviewList: expectedReviewList,
      };

      const initialState: ReviewsState = {
        reviewList: [],
      };

      const newStateReviews = reviewsReducer(
        initialState,
        loadReviewsActionCreator(expectedReviewList)
      );

      expect(newStateReviews).toStrictEqual(expectedReviewState);
    });
  });

  describe("When it is invoked with the reducer deleteReview", () => {
    test("Then it should delete a review with the id '6385fda659fac43576020f2d'", () => {
      const mockId = "6385fda659fac43576020f2d";

      const action = deleteReviewActionCreator(mockId);

      const expectedState = mockReviewToDelete;

      const newState = reviewsReducer(mockReviewList, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with the reducer createReview", () => {
    test("Then it should recieve a list of reviews with the new review created", () => {
      const newReview = {
        _id: "6385fda659fac43576020b2c",
        title: "abc",
        reviewText: "abc",
        rating: 10,
        favoriteScene: "abc.jpg",
      };

      const action = createReviewActionCreator(newReview);
      const expectedNewReviewList = {
        ...initialState,
        reviewList: [...initialState.reviewList, newReview],
      };

      const newState = reviewsReducer(initialState, action);

      expect(newState).toStrictEqual(expectedNewReviewList);
    });
  });
});
