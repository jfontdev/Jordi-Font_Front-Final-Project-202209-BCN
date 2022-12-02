import axios from "axios";
import { useCallback } from "react";
import { loadReviewsActionCreator } from "../../redux/features/reviewsSlice/reviewsSlice";
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

  return { loadReviewsList };
};

export default useReview;
