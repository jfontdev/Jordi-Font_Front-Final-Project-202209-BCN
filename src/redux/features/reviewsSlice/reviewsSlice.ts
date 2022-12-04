import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Review, Reviews, ReviewsState } from "./types";

export const initialState: ReviewsState = {
  reviewList: [],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState: initialState,
  reducers: {
    loadReviews: (
      currentState,
      action: PayloadAction<Reviews>
    ): ReviewsState => ({
      ...currentState,
      reviewList: [...action.payload],
    }),
    deleteReview: (
      currentState,
      action: PayloadAction<string>
    ): ReviewsState => ({
      ...currentState,
      reviewList: [
        ...currentState.reviewList.filter(
          (review) => review._id !== action.payload
        ),
      ],
    }),
    createReview: (currentState, action: PayloadAction<Review>) => ({
      ...currentState,
      reviewList: [...currentState.reviewList, action.payload],
    }),
  },
});

export const {
  loadReviews: loadReviewsActionCreator,
  deleteReview: deleteReviewActionCreator,
  createReview: createReviewActionCreator,
} = reviewSlice.actions;

export const reviewsReducer = reviewSlice.reducer;
