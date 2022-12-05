import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import {
  closeLoadingActionCreator,
  openModalActionCreator,
  triggerLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/usersSlice/usersSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  AxiosErrorResponseBody,
  JwtPayloadCustom,
  LoginResponse,
  UserCredentials,
  UserRegisterCredentials,
} from "../../types/types";
import decodeToken from "../../utils/decodetoken";
import useToken from "../useToken/useToken";

const useUser = () => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const url = process.env.REACT_APP_API_URL!;
  const navigate = useNavigate();

  const loginUser = async (userData: UserCredentials) => {
    dispatch(triggerLoadingActionCreator());
    try {
      const responseData = await axios.post<LoginResponse>(
        `${url}users/login`,
        userData
      );

      const { token } = responseData.data;
      const loggedUser: JwtPayloadCustom = decodeToken(token);
      dispatch(closeLoadingActionCreator());
      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      localStorage.setItem("token", token);
      navigate("/film-detail");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: `${(error as AxiosError<AxiosErrorResponseBody>).response
            ?.data.error!}`,
        })
      );
    }
  };

  const logoutUser = () => {
    removeToken();

    dispatch(logoutUserActionCreator());
  };

  const registerUser = async (registerData: UserRegisterCredentials) => {
    dispatch(triggerLoadingActionCreator());
    try {
      await axios.post(`${url}users/register`, registerData);
      dispatch(closeLoadingActionCreator());
      navigate("/");
      dispatch(
        openModalActionCreator({
          message: "Bienvenid@! Ahora estas registrad@.",
          isError: false,
        })
      );
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          message: `${(error as AxiosError<AxiosErrorResponseBody>).response
            ?.data.error!}`,
          isError: true,
        })
      );
    }
  };

  return { loginUser, logoutUser, registerUser };
};

export default useUser;
