import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const ReviewCardStyled = styled.article`
  border: 2px solid ${mainTheme.colors.review.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin-left: ${mainTheme.pxToRem(25)};
  margin-right: ${mainTheme.pxToRem(25)};
  .review-container {
    margin-left: ${mainTheme.pxToRem(10)};
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ReviewCardStyled;
