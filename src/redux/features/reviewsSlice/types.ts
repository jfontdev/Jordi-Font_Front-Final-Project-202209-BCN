export interface ReviewsState {
  reviewList: Reviews;
  review?: Review;
}

export interface Review {
  _id?: string;
  title: string;
  reviewText: string;
  rating: number;
  favoriteScene: string;
}

export type Reviews = Review[];
