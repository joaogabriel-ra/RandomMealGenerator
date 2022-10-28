import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  test("should render the app", () => {
    render(<App />);

    const text = screen.getByText(/feeling hungry/i);
    expect(text).toBeInTheDocument();
  });

  //TO DO: Implement dark mode
  // test("should render the dark mode switch", () => {
  //   render(<App />);

  //   const darkModeSwitch = screen.queryByRole("switch");

  //   expect(darkModeSwitch as HTMLElement).toBeInTheDocument();
  // });
});
