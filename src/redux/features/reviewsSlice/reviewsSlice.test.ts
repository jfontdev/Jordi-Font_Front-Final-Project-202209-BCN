import { loadReviewsActionCreator, reviewsReducer } from "./reviewsSlice";
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
        reviewsList: expectedReviewList,
      };

      const initialState: ReviewsState = {
        reviewsList: [],
      };

      const newStateRobots = reviewsReducer(
        initialState,
        loadReviewsActionCreator(expectedReviewList)
      );

      expect(newStateRobots).toStrictEqual(expectedReviewState);
    });
  });
});
