export interface ReviewsState {
  reviewsList: Reviews;
}

export interface Review {
  id?: string;
  title: string;
  reviewText: string;
  rating: number;
  favoriteScene: string;
}

export type Reviews = Review[];
