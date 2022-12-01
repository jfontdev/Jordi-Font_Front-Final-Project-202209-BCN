import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reviewsReducer } from "./features/reviewsSlice/reviewsSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/usersSlice/usersSlice";

export const store = configureStore({
  reducer: { user: userReducer, ui: uiReducer, review: reviewsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
