import { OpenModalPayload, UiState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const UiInitialState: UiState = {
  message: "",
  isError: false,
  isOpen: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: UiInitialState,
  reducers: {
    openModal: (
      previousUi,
      action: PayloadAction<OpenModalPayload>
    ): UiState => ({
      ...previousUi,
      message: action.payload.message,
      isError: action.payload.isError,
      isOpen: true,
    }),
    closeModal: (previousUi): UiState => ({
      ...previousUi,
      message: "",
      isOpen: false,
    }),
    triggerLoading: (previousUi): UiState => ({
      ...previousUi,
      isLoading: true,
    }),
    closeLoading: (previousUi): UiState => ({
      ...previousUi,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  triggerLoading: triggerLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
} = uiSlice.actions;
