import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReviewDetail from "../../components/ReviewDetail/ReviewDetail";
import useReview from "../../hooks/useReview/useReview";
import { useAppSelector } from "../../redux/hooks";
import DetailStyled from "./DetailStyled";

const Detail = (): JSX.Element => {
  const { getReviewById } = useReview();
  const { id } = useParams();

  useEffect(() => {
    getReviewById(id!);
  }, [id, getReviewById]);

  const review = useAppSelector(({ review }) => review.review);

  return (
    <DetailStyled>
      <h1>Reseña</h1>
      <ReviewDetail review={review!} />
      <span className="span-question">Cambiaste de opinion?</span>
      <Link to={"/film-detail"}>
        <span className="span-link">Vuelve atras</span>
      </Link>
    </DetailStyled>
  );
};

export default Detail;
