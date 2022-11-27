import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const ButtonStyled = styled.button`
  border-radius: ${mainTheme.sizes.button.borderRadius};
  border: none;
  color: ${mainTheme.colors.letter.light};
  font-weight: 500;
  font-size: 28px;
  line-height: 1.5;
  padding: ${mainTheme.pxToRem(18)} ${mainTheme.pxToRem(20)};
  overflow: hidden;
  width: 100%;
  margin-top: ${mainTheme.pxToRem(32)};
  &:hover {
    cursor: pointer;
  }
  &.btn--dark {
    background: ${mainTheme.colors.button.dark};
  }
  &.btn--medium {
    background: ${mainTheme.colors.button.medium};
  }
  &.btn--light {
    background: ${mainTheme.colors.button.light};
  }
`;

export default ButtonStyled;
