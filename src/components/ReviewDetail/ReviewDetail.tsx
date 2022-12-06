import { Link } from "react-router-dom";
import ReviewDetailStyled from "./ReviewDetailStyled";

interface ReviewDetailProps {
  title: string;
  review: string;
  rating: number;
  favoriteScene: string;
}

const ReviewDetail = ({
  title,
  review,
  rating,
  favoriteScene,
}: ReviewDetailProps): JSX.Element => {
  return (
    <ReviewDetailStyled>
      <div className="review-container">
        <h2 className="review-title">{title}</h2>
        <p className="review-text">{review}</p>
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
        <span className="span-question">Cambiaste de opinion?</span>
        <Link to={"/film-detail"}>
          <span className="span-link">Vuelve atras</span>
        </Link>
      </div>
    </ReviewDetailStyled>
  );
};

export default ReviewDetail;
