import { useEffect } from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview/useReview";
import { useAppSelector } from "../../redux/hooks";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewCardListStyled from "./ReviewCardListStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import scrollToTop from "../../utils/scrollToTop";

const ReviewCardList = (): JSX.Element => {
  const reviewList = useAppSelector(({ review }) => review.reviewList);
  const { loadReviewsList } = useReview();

  useEffect(() => {
    loadReviewsList();
    scrollToTop();
  }, [loadReviewsList]);

  return (
    <ReviewCardListStyled className="reviews-list">
      <h2 className="reviews-title">Reseñas:</h2>
      <Link to={"/create-review"} onClick={scrollToTop}>
        <span className="span-link">
          <FontAwesomeIcon icon={faPlus} className="add-icon" />
          Añadir Reseña
        </span>
      </Link>
      <ul>
        {reviewList.map((review) => (
          <li key={review._id!} className="reviews-list-container">
            <ReviewCard
              id={review._id!}
              title={review.title}
              review={review.reviewText}
              rating={review.rating}
              favoriteScene={review.favoriteScene}
            />
          </li>
        ))}
      </ul>
    </ReviewCardListStyled>
  );
};

export default ReviewCardList;
