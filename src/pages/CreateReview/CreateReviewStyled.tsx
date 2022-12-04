import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const CreateReviewStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    justify-content: center;
    align-items: center;
    margin-bottom: ${mainTheme.pxToRem(10)};
    margin-top: ${mainTheme.pxToRem(16)};
    font-weight: 700;
    font-size: 26px;
  }
`;

export default CreateReviewStyled;
