import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import TestWalletProvider from "./test/helpers/TestWalletProvider";

test("renders App", () => {
  render(
    <TestWalletProvider>
      <App />
    </TestWalletProvider>
  );
  const linkElement = screen.getByText(/donate/i);
  expect(linkElement).toBeInTheDocument();
});
