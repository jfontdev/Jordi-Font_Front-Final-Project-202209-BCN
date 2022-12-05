import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteReviewActionCreator,
  loadReviewsActionCreator,
} from "../../redux/features/reviewsSlice/reviewsSlice";
import { Review } from "../../redux/features/reviewsSlice/types";
import {
  closeLoadingActionCreator,
  openModalActionCreator,
  triggerLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";

const useReview = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const loadReviewsList = useCallback(async () => {
    dispatch(triggerLoadingActionCreator());
    try {
      const response = await axios.get(`${url}reviews`);

      const responseData = response.data;

      const { reviewList } = responseData;

      dispatch(closeLoadingActionCreator());

      dispatch(loadReviewsActionCreator(reviewList));
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Esta película aún no tiene reseñas.",
        })
      );
    }
  }, [dispatch, url]);

  const deleteReview = async (idReview: string) => {
    dispatch(triggerLoadingActionCreator());
    try {
      await axios.delete(`${url}reviews/delete/${idReview}`);
      dispatch(closeLoadingActionCreator());
      dispatch(deleteReviewActionCreator(idReview));
      dispatch(
        openModalActionCreator({
          isError: false,
          message: "Se ha borrado la reseña.",
        })
      );
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "No puedes borrar en estos momentos!",
        })
      );
    }
  };

  const createReview = async (reviewData: Review) => {
    dispatch(triggerLoadingActionCreator());
    try {
      await axios.post(`${url}reviews/create`, reviewData);
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          message: "Reseña creada",
        })
      );
      navigate("/film-detail");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "No puedes crear reseñas ahora mismo.",
        })
      );
    }
  };

  return { loadReviewsList, deleteReview, createReview };
};

export default useReview;
