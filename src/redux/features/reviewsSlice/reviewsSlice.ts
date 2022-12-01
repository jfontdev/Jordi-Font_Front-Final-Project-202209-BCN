import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Reviews, ReviewsState } from "./types";

const initialState: ReviewsState = {
  reviewsList: [],
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
      reviewsList: [...action.payload],
    }),
  },
});

export const { loadReviews: loadReviewsActionCreator } = reviewSlice.actions;

export const reviewsReducer = reviewSlice.reducer;
