import { Review } from "../../redux/features/reviewsSlice/types";
import ReviewDetailStyled from "./ReviewDetailStyled";

interface ReviewDetailProps {
  review: Review;
}

const ReviewDetail = (review: ReviewDetailProps): JSX.Element => {
  const {
    review: { title, reviewText, rating, favoriteScene },
  } = review;
  return (
    <ReviewDetailStyled>
      <div className="review-container">
        <h2 className="review-title">{title}</h2>
        <p className="review-text">{reviewText}</p>
        <span className="review-rating">Calificación: {rating}/10</span>
        <div className="review-scene-container">
          <span className="review-scene-container-title">Escena favorita:</span>
          <img
            className="review-scene"
            src={favoriteScene}
            alt=""
            height={324}
            width={312}
          />
        </div>
      </div>
    </ReviewDetailStyled>
  );
};

export default ReviewDetail;
