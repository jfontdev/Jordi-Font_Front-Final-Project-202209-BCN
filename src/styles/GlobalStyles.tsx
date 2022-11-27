import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";
import mainTheme from "./mainTheme";

const GlobalStyles = createGlobalStyle`

body {
line-height: 1.5;
font-family: ${mainTheme.font.mainFont};
}

.container {
  width: 100%;
  padding-right: calc(${mainTheme.grid.paddingX} * 0.5);
  padding-left: calc(${mainTheme.grid.paddingX} * 0.5);
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-0.5 * ${mainTheme.grid.paddingX});
  margin-left: calc(-0.5 * ${mainTheme.grid.paddingX});
  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(${mainTheme.grid.paddingX} * 0.5);
    padding-left: calc(${mainTheme.grid.paddingX} * 0.5);
    }
}

.col {
  flex: 1 0 0%;
}

.col-6 {
  flex: 0 0 auto;
  width: 25%;
}

@media (min-width: ${mainTheme.screens.xl}) {
  .container {
    max-width: ${mainTheme.grid.container.xl}
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}
`;

export default GlobalStyles;
