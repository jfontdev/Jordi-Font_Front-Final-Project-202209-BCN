import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    input: {
      border: "#14142b",
      background: "#f7f7fc",
    },
    header: {
      light: "#0795e6",
      dark: "#003452",
    },
    button: {
      dark: "#12194a",
      medium: "#387ea5",
      light: "#0077da",
    },
    review: {
      dark: "#003452",
      light: "#0795E6",
      user: "#136cb2",
    },
    footer: {
      light: "#909090",
    },
    letter: {
      dark: "#000000",
      light: "#f7F7fc",
    },
    modalSuccess: {
      accent: "#00BA88",
      background: "#f2fffB",
    },
    modalError: {
      accent: "#c30052",
      background: "#ed2e7e",
    },
  },
  sizes: {
    button: {
      padding: "1rem 1rem",
      borderRadius: "40px",
    },
    body: {
      paddingHorizontal: "20px",
    },
  },
  font: {
    mainFont: "Poppins",
  },
  pxToRem: (value: number): string => `${value / 16}rem`,
  grid: {
    container: {
      xl: "1304px",
    },
    paddingX: "1rem",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export default mainTheme;
