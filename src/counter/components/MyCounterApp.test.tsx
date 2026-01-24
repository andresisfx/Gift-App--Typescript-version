import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MyCounterApp } from "./MyCounterApp";

describe("MycounterApp", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);
    screen.debug();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain("10");
    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("Should increment when +1 btn clicked", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });

    const incrementBtn = screen.getByRole("button", { name: "+1" });

    fireEvent.click(incrementBtn);

    expect(labelH1.innerHTML).toContain(11);
  });

  test("Should decrement when -1 btn clicked", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });

    const incrementBtn = screen.getByRole("button", { name: "-1" });

    fireEvent.click(incrementBtn);

    expect(labelH1.innerHTML).toContain(9);
  });
});
