import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
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
    try {
      const responseData = await axios.post<LoginResponse>(
        `${url}users/login`,
        userData
      );

      const { token } = responseData.data;
      const loggedUser: JwtPayloadCustom = decodeToken(token);

      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      localStorage.setItem("token", token);
    } catch (error: unknown) {
      throw new Error(`Login fails : ${(error as Error).message}`);
    }
  };

  const logoutUser = () => {
    try {
      removeToken();
      dispatch(logoutUserActionCreator());
    } catch (error: unknown) {
      throw new Error(`Logout fails: ${(error as Error).message}`);
    }
  };

  const registerUser = async (registerData: UserRegisterCredentials) => {
    try {
      await axios.post(`${url}users/register`, registerData);

      dispatch(
        openModalActionCreator({
          message: "Bienvenid@! Ahora estas registrad@.",
          isError: false,
        })
      );
      navigate("/");
    } catch (error: unknown) {
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
