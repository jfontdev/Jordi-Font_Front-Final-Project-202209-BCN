import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      input: {
        border: string;
        background: string;
      };
      header: {
        light: string;
        dark: string;
      };
      button: {
        dark: string;
        medium: string;
        light: string;
      };
      review: {
        dark: string;
        light: string;
        user: string;
      };
      footer: {
        light: string;
      };
      letter: {
        dark: string;
        light: string;
      };
      modalSuccess: {
        accent: string;
        background: string;
      };
      modalError: {
        accent: string;
        background: string;
      };
    };
    font: {
      mainFont: string;
    };
    sizes: {
      body: {
        paddingHorizontal: string;
      };
      button: {
        padding: string;
        borderRadius: string;
      };
    };
    pxToRem: (value: number) => {};
    grid: {
      container: {
        xl: string;
      };
      paddingX: string;
    };
    screens: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
