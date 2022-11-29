import { useCallback, useEffect } from "react";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ModalStyled from "./ModalStyled";

const Modal = (): JSX.Element => {
  const { message: modalText, isError } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [closeModal]);

  return (
    <ModalStyled className={isError ? "modal-error" : "modal-success"}>
      <div onClick={closeModal}>{modalText}</div>
    </ModalStyled>
  );
};

export default Modal;
