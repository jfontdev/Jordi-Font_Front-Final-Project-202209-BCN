import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const ReviewCardListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  .reviews.list.container {
    margin-left: ${mainTheme.pxToRem(20)};
    margin-right: ${mainTheme.pxToRem(20)};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .reviews-title {
    margin-top: ${mainTheme.pxToRem(5)};
    margin-left: ${mainTheme.pxToRem(20)};
    margin-right: ${mainTheme.pxToRem(30)};
    margin-bottom: ${mainTheme.pxToRem(10)};
  }
`;

export default ReviewCardListStyled;
