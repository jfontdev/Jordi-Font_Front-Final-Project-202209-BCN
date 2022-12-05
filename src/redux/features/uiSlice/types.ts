export interface OpenModalPayload {
  message: string;
  isError: boolean;
}

export interface UiState extends OpenModalPayload {
  isOpen: boolean;
  isLoading?: boolean;
}
