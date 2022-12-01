import { configureStore } from "@reduxjs/toolkit";
import { reviewsReducer } from "../../redux/features/reviewsSlice/reviewsSlice";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/usersSlice/usersSlice";
import { store } from "../../redux/store";
import { mockUserStateNotLogged } from "../state/mockUserStateNotLogged";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    review: reviewsReducer,
  },

  preloadedState: {
    user: mockUserStateNotLogged,
  },
});

export default mockInitialStore;
