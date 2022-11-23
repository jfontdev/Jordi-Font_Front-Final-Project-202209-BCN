import { useCallback } from "react";
import { loginUserActionCreator } from "../../redux/features/usersSlice/usersSlice";
import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decodetoken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);
      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
