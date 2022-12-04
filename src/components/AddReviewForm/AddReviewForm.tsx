import React, { useState } from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview/useReview";
import { Review } from "../../redux/features/reviewsSlice/types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import AddReviewFormStyled from "./AddReviewFormStyled";

const AddReviewForm = (): JSX.Element => {
  const { createReview } = useReview();

  const initialFormData: Review = {
    title: "",
    reviewText: "",
    rating: 0,
    favoriteScene: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: Review = {
      title: formData.title,
      reviewText: formData.reviewText,
      rating: formData.rating,
      favoriteScene: formData.favoriteScene,
    };
    createReview(formDataToSubmit);
  };

  return (
    <AddReviewFormStyled
      className="form"
      onSubmit={(event) => handleSubmit(event)}
    >
      <Label classname="form_label" htmlFor="title">
        Titulo
      </Label>
      <Input
        type="text"
        name="title"
        id="title"
        onChange={handleFormChange}
        placeholder="Titulo de la reseña"
        autoComplete="off"
      />
      <Label classname="form_label" htmlFor="reviewText">
        Reseña
      </Label>
      <Input
        type="text"
        name="reviewText"
        id="reviewText"
        onChange={handleFormChange}
        placeholder="Texto de la reseña"
        autoComplete="off"
      />
      <Label classname="form_label" htmlFor="rating">
        Calificación
      </Label>
      <Input
        type="text"
        name="rating"
        id="rating"
        onChange={handleFormChange}
        placeholder="Calificación"
        autoComplete="off"
      />
      <Label classname="form_label" htmlFor="favoriteScene">
        Escena favorita
      </Label>
      <Input
        type="text"
        name="favoriteScene"
        id="favoriteScene"
        onChange={handleFormChange}
        placeholder="Escena favorita"
        autoComplete="off"
      />
      <Button className="btn--dark" type="submit" text="Añadir" />
      <span className="span-question">Cambiaste de opinion?</span>
      <Link to={"/film-detail"}>
        <span className="span-link">Vuelve atras</span>
      </Link>
    </AddReviewFormStyled>
  );
};

export default AddReviewForm;
