import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const ReviewCardListStyled = styled.article`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-bottom: ${mainTheme.pxToRem(20)};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

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
    margin-bottom: ${mainTheme.pxToRem(16)};
  }
  .span-link {
    margin-top: ${mainTheme.pxToRem(10)};
    margin-left: ${mainTheme.pxToRem(20)};
    margin-right: ${mainTheme.pxToRem(30)};
    margin-bottom: ${mainTheme.pxToRem(10)};
    text-decoration: none;
    color: #464d5d;
    font-weight: 600;
    font-size: 18px;
  }
  .add-icon {
    margin-right: ${mainTheme.pxToRem(4)};
    font-size: ${mainTheme.pxToRem(16)};
  }
`;

export default ReviewCardListStyled;
