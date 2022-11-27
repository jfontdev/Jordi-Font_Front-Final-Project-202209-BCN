import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyles = createGlobalStyle`
  *,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height : 100%;
  margin : 0;
}

html {
  font-family: "Poppins", Helvetica, Arial, Verdana, Tahoma, sans-serif;
}

ul {
  list-style: none;

}

input,
button,
textarea,
select {
  font :inherit
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap :break-word;
  margin: 0
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

`;

export default GlobalStyles;