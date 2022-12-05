import { mockEmptyModal } from "../../../mocks/ui/mockEmptyModal";
import {
  mockInitialLoading,
  mockTriggeredLoader,
} from "../../../mocks/ui/mockLoading";
import {
  closeLoadingActionCreator,
  closeModalActionCreator,
  openModalActionCreator,
  triggerLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a ui reducer", () => {
  describe("When it receives an initial state and an uknown action", () => {
    test("Then it should return a new state with a copy of a empty modal", () => {
      const unknownAction = {
        type: "user/unknown",
      };

      const newState = uiReducer(mockEmptyModal, unknownAction);

      expect(newState).toStrictEqual(mockEmptyModal);
    });
  });

  describe("When it receives an initial state and the openModal action", () => {
    test("Then it should return a modal with the text 'Login Successful'", () => {
      const currentUiState = mockEmptyModal;

      const modalText = "Login Successful";
      const modalStatus = true;
      const modalError = false;

      const openModalPayload = {
        isError: modalError,
        message: modalText,
      };

      const expectedUiState = {
        ...currentUiState,
        message: modalText,
        isOpen: modalStatus,
        isError: modalError,
      };

      const newState = uiReducer(
        currentUiState,
        openModalActionCreator(openModalPayload)
      );

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state and the closeModal action", () => {
    test("Then it should return a modal with text 'Login Successful and close it", () => {
      const currentUiState = mockEmptyModal;

      const expectedUiState = { ...currentUiState, isOpen: false };

      const newState = uiReducer(currentUiState, closeModalActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state and the triggerLoading action", () => {
    test("Then it should return the new ui state with 'isLoading' as 'true'", () => {
      const currentUiState = mockInitialLoading;

      const expectedUiState = { ...currentUiState, isLoading: true };

      const newState = uiReducer(currentUiState, triggerLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state with a loader and the closeLoading action", () => {
    test("Then it should return the new ui state with 'isLoading' as 'false'", () => {
      const currentUiState = mockTriggeredLoader;

      const expectedUiState = { ...currentUiState, isLoading: false };

      const newState = uiReducer(currentUiState, closeLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
