import axios from "axios";
import { useCallback } from "react";
import {
  deleteReviewActionCreator,
  loadReviewsActionCreator,
} from "../../redux/features/reviewsSlice/reviewsSlice";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";

const useReview = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL;

  const loadReviewsList = useCallback(async () => {
    try {
      const response = await axios.get(`${url}reviews`);

      const responseData = response.data;

      const { reviewList } = responseData;

      dispatch(loadReviewsActionCreator(reviewList));
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Esta película aún no tiene reseñas.",
        })
      );
    }
  }, [dispatch, url]);

  const deleteReview = async (idReview: string) => {
    try {
      await axios.delete(`${url}reviews/delete/${idReview}`);
      dispatch(deleteReviewActionCreator(idReview));
      dispatch(
        openModalActionCreator({
          isError: false,
          message: "Se ha borrado la reseña.",
        })
      );
    } catch (error: unknown) {
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "No puedes borrar en estos momentos!",
        })
      );
    }
  };

  return { loadReviewsList, deleteReview };
};

export default useReview;
