import { ReviewsState } from "../../redux/features/reviewsSlice/types";

export const mockEmptyReview: ReviewsState = {
  reviewsList: [],
};

export const mockReviews = [
  {
    _id: "6385fda659fac43576020b2c",
    title: "abc",
    reviewText: "abc",
    rating: 10,
    favoriteScene: "abc.jpg",
  },
  {
    _id: "6385fda659fac43576020c3d",
    title: "def",
    reviewText: "def",
    rating: 10,
    favoriteScene: "def",
  },
  {
    _id: "6385fda659fac43576020f2d",
    title: "def",
    reviewText: "def",
    rating: 10,
    favoriteScene: "def",
  },
];
