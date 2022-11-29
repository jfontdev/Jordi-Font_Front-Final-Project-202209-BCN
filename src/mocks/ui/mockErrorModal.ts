import { UiState } from "../../redux/features/uiSlice/types";

export const mockErrorModal: UiState = {
  isOpen: true,
  isError: true,
  message: "Fatal error!",
};
