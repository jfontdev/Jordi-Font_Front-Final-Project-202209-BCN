import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const ReviewCardStyled = styled.article`
  border: 2px solid ${mainTheme.colors.review.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin-top: ${mainTheme.pxToRem(33)};
  margin-left: ${mainTheme.pxToRem(20)};
  margin-right: ${mainTheme.pxToRem(20)};
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
    margin-top: ${mainTheme.pxToRem(10)};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .review-rating {
    margin-bottom: ${mainTheme.pxToRem(16)};
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-delete {
    width: 50%;
    margin-top: ${mainTheme.pxToRem(16)};
    margin-bottom: ${mainTheme.pxToRem(16)};
    padding: 5px;
    border: 2px solid ${mainTheme.colors.button.medium};
  }
`;

export default ReviewCardStyled;
