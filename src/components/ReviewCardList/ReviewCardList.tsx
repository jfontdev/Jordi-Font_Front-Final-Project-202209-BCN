import { useEffect } from "react";
import useReview from "../../hooks/useReview/useReview";
import { useAppSelector } from "../../redux/hooks";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewCardListStyled from "./ReviewCardListStyled";

const ReviewCardList = (): JSX.Element => {
  const reviewList = useAppSelector(({ review }) => review.reviewsList);
  const { loadReviewsList } = useReview();

  useEffect(() => {
    loadReviewsList();
  }, [loadReviewsList]);

  return (
    <ReviewCardListStyled className="reviews-list">
      <h2 className="reviews-title">Reseñas:</h2>
      {reviewList.map((review, index) => (
        <li key={index} className="reviews-list-container">
          <ReviewCard
            title={review.title}
            review={review.reviewText}
            rating={review.rating}
            favoriteScene={review.favoriteScene}
          />
        </li>
      ))}
    </ReviewCardListStyled>
  );
};

export default ReviewCardList;
