import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${mainTheme.colors.header.light};
  list-style: none;
  width: 100%;

  .header-title {
    font-size: 32px;
    color: ${mainTheme.colors.letter.light};
    font-weight: 400;
  }
`;

export default HeaderStyled;
