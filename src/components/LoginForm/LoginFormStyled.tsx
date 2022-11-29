import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${mainTheme.pxToRem(10)};
  gap: 10px;
  width: 50%;
  .form_label {
    font-size: ${mainTheme.pxToRem(20)};
  }
  span {
    font-size: 20px;
  }
  .span-question {
    margin-top: ${mainTheme.pxToRem(40)};
  }
  .span-link {
    margin-top: ${mainTheme.pxToRem(10)};
    text-decoration: none;
    color: #464d5d;
    font-weight: 600;
  }
`;

export default LoginFormStyled;
