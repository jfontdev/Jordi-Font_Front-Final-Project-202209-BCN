import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview/useReview";
import Button from "../Button/Button";
import ReviewCardStyled from "./ReviewCardStyled";

interface MovieCardProps {
  title: string;
  review: string;
  rating: number;
  favoriteScene: string;
  id: string;
}

const ReviewCard = ({
  id,
  title,
  review,
  rating,
  favoriteScene,
}: MovieCardProps): JSX.Element => {
  const { deleteReview } = useReview();
  return (
    <ReviewCardStyled>
      <div className="review-container">
        <Link to={`/review-detail/${id}`}>
          <h2 className="review-title">{title}</h2>
        </Link>
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
      </div>
      <div className="button-container">
        <Button
          className="button-delete btn--medium"
          type="submit"
          text="Borrar"
          action={() => {
            deleteReview(id!);
          }}
        />
      </div>
    </ReviewCardStyled>
  );
};

export default ReviewCard;
