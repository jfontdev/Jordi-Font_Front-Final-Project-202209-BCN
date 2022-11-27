import { UiState } from "../../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const UiInitialState: UiState = {
  modal: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: UiInitialState,
  reducers: {
    openModal: (previousUi, action: PayloadAction<string>) => ({
      ...previousUi,
      modal: action.payload,
    }),
    closeModal: (previousUi) => ({ ...previousUi, modal: "" }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
