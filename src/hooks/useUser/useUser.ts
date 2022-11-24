import axios from "axios";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/usersSlice/usersSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  JwtPayloadCustom,
  LoginResponse,
  UserCredentials,
} from "../../types/types";
import decodeToken from "../../utils/decodetoken";
import useToken from "../useToken/useToken";

const useUser = () => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const url = process.env.REACT_APP_API_URL!;

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

  return { loginUser, logoutUser };
};

export default useUser;
