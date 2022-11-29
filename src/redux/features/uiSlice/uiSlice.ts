import { OpenModalPayload, UiState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const UiInitialState: UiState = {
  message: "",
  isError: false,
  isOpen: false,
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
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
