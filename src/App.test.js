import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders weather journal title", () => {
  const { getByText } = render(<App />);
  const title = getByText(/weather journal/i);
  expect(title).toBeInTheDocument();
});
