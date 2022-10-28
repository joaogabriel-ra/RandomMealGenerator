import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header", () => {
  test("should render", () => {
    render(<Header />);

    const text = screen.getByText(/feeling hungry/i);
    expect(text).toBeInTheDocument();
  });
});
