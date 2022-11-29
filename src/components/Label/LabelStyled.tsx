import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const LabelStyled = styled.label`
  display: block;
  margin-bottom: ${mainTheme.pxToRem(4)};
  &.radio {
    display: inline-block;
    margin-bottom: 0;
    & + .radio {
      margin-left: 1rem;
    }
    span {
      border: 1px solid ${mainTheme.colors.input.border};
      border-radius: 16px;
      cursor: pointer;
      display: inline-block;
      line-height: 1.5;
      padding: ${mainTheme.pxToRem(15)} 1rem;
      transition: border-color 0.2s ease-in-out;
      height: ${mainTheme.pxToRem(56)};
      margin-bottom: 0;
    }
  }
`;

export default LabelStyled;
