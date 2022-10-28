import { render, screen, waitForElement } from "@testing-library/react";
import React from "react";
import Meal from "./Meal";

describe("Meal", () => {
  test("should render the title", () => {
    render(<Meal />);

    const text = screen.getByText(/get a random meal by clicking below/i);

    expect(text).toBeInTheDocument();
  });

  test("should render the button", () => {
    render(<Meal />);

    const button = screen.queryByRole("get-meal");

    expect(button).toBeInTheDocument();
  });

  test("should render a random meal", () => {
    render(<Meal />);

    const button = screen.queryByRole("get-meal");
    button?.click(button);

    expect(button).toBeInTheDocument();

    waitForElement(() => {
      expect(screen.getByTestId("meal-img")).toBeInTheDocument();
      expect(screen.getByTestId("meal-category")).toBeInTheDocument();
      expect(screen.getByTestId("meal-area")).toBeInTheDocument();
      expect(screen.getByTestId("meal-ingredients")).toBeInTheDocument();
      expect(screen.getByTestId("meal-instructions")).toBeInTheDocument();
      expect(screen.getByTestId("meal-video")).toBeInTheDocument();
      expect(screen.getByTestId("meal")).toBeInTheDocument();
    });
  });
});
