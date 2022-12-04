import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const AddReviewFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${mainTheme.pxToRem(10)};
  gap: 8px;
  width: 70%;
  .form_label {
    font-size: ${mainTheme.pxToRem(20)};
  }
  span {
    font-size: 18px;
  }
  .span-question {
    margin-top: ${mainTheme.pxToRem(24)};
  }
  .span-link {
    margin-top: ${mainTheme.pxToRem(10)};
    text-decoration: none;
    color: #464d5d;
    font-weight: 600;
  }
`;

export default AddReviewFormStyled;
