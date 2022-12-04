import TestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("With path '/*', it should render NotFoundPage'", () => {
      const expectedApp = TestRenderer.create(
        <MemoryRouter initialEntries={["/*"]}>
          <App />
        </MemoryRouter>
      );
      expect(expectedApp).toMatchSnapshot();
    });
  });
});
