import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { reviewsReducer } from "../redux/features/reviewsSlice/reviewsSlice";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { userReducer } from "../redux/features/usersSlice/usersSlice";
import { RootState, store } from "../redux/store";
import GlobalStyles from "../styles/GlobalStyles";
import mainTheme from "../styles/mainTheme";

interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
  theme?: DefaultTheme;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { ui: uiReducer, user: userReducer, review: reviewsReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
