import AddReviewForm from "../../components/AddReviewForm/AddReviewForm";
import CreateReviewStyled from "./CreateReviewStyled";

const CreateReview = (): JSX.Element => {
  return (
    <CreateReviewStyled>
      <h1>Escribe tu reseña</h1>
      <AddReviewForm />
    </CreateReviewStyled>
  );
};

export default CreateReview;
