import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const DetailStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 0px;
  }
  span {
    font-size: 18px;
  }
  .span-question {
    margin-top: ${mainTheme.pxToRem(6)};
  }
  .span-link {
    margin-top: ${mainTheme.pxToRem(10)};
    text-decoration: none;
    color: #464d5d;
    font-weight: 600;
  }
`;

export default DetailStyled;
