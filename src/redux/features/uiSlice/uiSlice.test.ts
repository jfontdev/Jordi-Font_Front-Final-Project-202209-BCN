import { mockEmptyModal } from "../../../mocks/ui/mockEmptyModal";
import {
  closeModalActionCreator,
  openModalActionCreator,
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
      const currentUiState = { modal: "" };
      const modalText = "Login Successful";

      const expectedUiState = { ...currentUiState, modal: modalText };

      const newstate = uiReducer(
        currentUiState,
        openModalActionCreator(modalText)
      );

      expect(newstate).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state an the closeModal action", () => {
    test("Then it should return a modal with text 'Login Successful and close it", () => {
      const currentUiState = { modal: "Login Successful" };

      const expectedUiState = { ...currentUiState, modal: "" };

      const newstate = uiReducer(currentUiState, closeModalActionCreator());

      expect(newstate).toStrictEqual(expectedUiState);
    });
  });
});
