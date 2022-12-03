import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Reviews, ReviewsState } from "./types";

const initialState: ReviewsState = {
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
  },
});

export const {
  loadReviews: loadReviewsActionCreator,
  deleteReview: deleteReviewActionCreator,
} = reviewSlice.actions;

export const reviewsReducer = reviewSlice.reducer;
