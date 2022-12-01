import ReviewCardStyled from "./ReviewCardStyled";

interface MovieCardProps {
  title: string;
  review: string;
  rating: number;
  favoriteScene: string;
}

const ReviewCard = ({
  title,
  review,
  rating,
  favoriteScene,
}: MovieCardProps): JSX.Element => {
  return (
    <ReviewCardStyled>
      <div className="review-container">
        <h2 className="review-title">{title}</h2>
        <p className="review-text">{review}</p>
        <span className="review-rating">Calificación: {rating}/10</span>
        <div className="review-scene-container">
          <img
            className="review-scene"
            src={favoriteScene}
            alt=""
            height={324}
            width={312}
          />
        </div>
      </div>
    </ReviewCardStyled>
  );
};

export default ReviewCard;
