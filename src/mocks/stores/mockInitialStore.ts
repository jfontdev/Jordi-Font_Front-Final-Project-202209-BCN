import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../redux/features/usersSlice/usersSlice";
import { store } from "../../redux/store";
import { mockUserStateNotLogged } from "../state/mockUserStateNotLogged";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    user: userReducer,
  },

  preloadedState: {
    user: mockUserStateNotLogged,
  },
});

export default mockInitialStore;
