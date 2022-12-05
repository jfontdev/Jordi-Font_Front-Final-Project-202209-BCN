import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

const MovieDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 5px;
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .movie-poster-container {
    overflow: hidden;
  }

  .movie-poster {
    margin-top: ${mainTheme.pxToRem(60)};
    margin-right: ${mainTheme.pxToRem(15)};
    margin-left: ${mainTheme.pxToRem(15)};
    border-radius: ${mainTheme.sizes.button.borderRadius};
    filter: drop-shadow(5px 5px 5px #666666);
  }

  .movie-details {
    margin-left: ${mainTheme.pxToRem(20)};
    margin-right: ${mainTheme.pxToRem(30)};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .movie-year-container {
    display: flex;
  }

  .movie-title {
    margin-top: ${mainTheme.pxToRem(38)};
    flex-direction: column;
  }

  .movie-year-heading {
    flex-direction: row;
  }

  .movie-year {
    font-size: ${mainTheme.pxToRem(24)};
    margin-left: ${mainTheme.pxToRem(10)};
    margin-top: ${mainTheme.pxToRem(10)};
    flex-direction: column;
  }

  .movie-description {
    margin-top: ${mainTheme.pxToRem(14)};
    font-size: ${mainTheme.pxToRem(24)};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    .movie-poster {
      margin-right: 10px;
      margin-left: 40px;
      margin-bottom: 15px;
    }
  }
`;

export default MovieDetailStyled;
