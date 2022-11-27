import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const InputStyled = styled.input`
  &:not(.radio) {
    display: block;
    border: 2px solid ${mainTheme.colors.input.border};
    border-radius: 16px;
    line-height: 1.5;
    background-color: ${mainTheme.colors.input.background};
    width: 100%;
    padding: ${mainTheme.pxToRem(15)} 1rem;
    transition: border-color 0.2s ease-in-out;
    height: ${mainTheme.pxToRem(78)};
  }
  &::placeholder {
    color: ${mainTheme.colors.footer.light};
  }
  &:focus {
    border-color: ${mainTheme.colors.letter.dark};
  }
  &.radio {
    appearance: none;
    &:checked {
      & + span {
        border-color: ${mainTheme.colors.input.border};
      }
    }
  }
  &.file {
    cursor: pointer;
    &::file-selector-button {
      background-color: transparent;
      border: none;
      border-right: 2px solid ${mainTheme.colors.input.border};
      cursor: pointer;
      line-height: 1.5;
      margin: ${mainTheme.pxToRem(-15)} 1rem ${mainTheme.pxToRem(-15)} -1rem;
      padding: ${mainTheme.pxToRem(26)} 1rem;
      transition: background-color 0.2s ease-in-out;
    }
    &:hover {
      &::file-selector-button {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

export default InputStyled;
