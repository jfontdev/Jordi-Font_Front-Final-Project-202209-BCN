import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const ReviewDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin-left: ${mainTheme.pxToRem(20)};
  margin-right: ${mainTheme.pxToRem(20)};
  .review-container {
    margin-left: ${mainTheme.pxToRem(10)};
    margin-bottom: ${mainTheme.pxToRem(10)};
  }
  .review-title {
    margin-top: ${mainTheme.pxToRem(10)};
  }
  .review-text {
    margin-right: ${mainTheme.pxToRem(10)};
  }
  .review-scene-container {
    margin-top: ${mainTheme.pxToRem(10)};
    margin-right: ${mainTheme.pxToRem(10)};
    overflow: hidden;
  }
  .review-scene {
    margin-top: ${mainTheme.pxToRem(10)};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .review-rating {
    margin-bottom: ${mainTheme.pxToRem(16)};
  }
`;

export default ReviewDetailStyled;
