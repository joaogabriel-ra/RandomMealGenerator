import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import Meal from "./Meal";

describe("Meal", () => {
  test("should render the title", () => {
    render(<Meal />);

    const text = screen.getByText(/feeling hungry/i);

    expect(text).toBeInTheDocument();
  });

  test("should render the button", () => {
    render(<Meal />);

    const button = screen.queryByRole("get-meal");

    expect(button).toBeInTheDocument();
  });

  test("should render a random meal", async () => {
    render(<Meal />);

    const button = screen.queryByRole("get-meal");
    button?.click(button);

    expect(button).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId("meal-img")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("meal-category")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("meal-area")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("meal-ingredients")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("meal-instructions")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("meal-video")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("meal")).toBeInTheDocument();
    });
  });
});
