import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${mainTheme.pxToRem(50)};
  gap: 10px;
  width: 50%;
`;

export default RegisterFormStyled;
