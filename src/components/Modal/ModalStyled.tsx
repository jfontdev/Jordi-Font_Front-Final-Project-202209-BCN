import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const ModalStyled = styled.div`
  position: fixed;
  font-size: 1.5rem;
  border-radius: 1rem;
  width: 60vw;
  height: 30vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  margin-top: auto;
  bottom: 0;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  z-index: 10;

  &.modal-success {
    background-color: ${mainTheme.colors.modalSuccess.background};
    color: ${mainTheme.colors.modalSuccess.accent};
    border: 2px solid ${mainTheme.colors.modalSuccess.accent};
  }
  &.modal-error {
    background-color: ${mainTheme.colors.modalError.background};
    color: ${mainTheme.colors.modalError.accent};
    border: 2px solid ${mainTheme.colors.modalError.accent};
  }
  @media screen and (min-width: 600px) {
    width: 50vw;
  }
`;

export default ModalStyled;
