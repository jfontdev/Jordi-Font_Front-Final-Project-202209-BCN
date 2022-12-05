import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Review, Reviews, ReviewsState } from "./types";

export const initialState: ReviewsState = {
  reviewList: [],
  review: {},
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
    getReviewById: (currentState, action: PayloadAction<Review>) => ({
      ...currentState,
      review: { ...action.payload } as Review,
    }),
  },
});

export const {
  loadReviews: loadReviewsActionCreator,
  deleteReview: deleteReviewActionCreator,
  createReview: createReviewActionCreator,
  getReviewById: getReviewByIdActionCreator,
} = reviewSlice.actions;

export const reviewsReducer = reviewSlice.reducer;
