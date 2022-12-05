import { UiState } from "../../redux/features/uiSlice/types";

export const mockInitialLoading: UiState = {
  isOpen: false,
  isError: false,
  message: "",
  isLoading: false,
};

export const mockTriggeredLoader: UiState = {
  isOpen: false,
  isError: false,
  message: "",
  isLoading: true,
};
