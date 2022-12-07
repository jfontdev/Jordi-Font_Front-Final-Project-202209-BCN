import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${mainTheme.pxToRem(10)};
  h1 {
    justify-content: center;
    align-items: center;

    margin-top: ${mainTheme.pxToRem(10)};
    font-weight: 700;
    font-size: 48px;
  }
`;

export default HomePageStyled;
