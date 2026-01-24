import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Searchbar } from "./Searchbar";

describe("SearchBar", () => {
  test("Should render searchbar correctly", () => {
    render(<Searchbar handleSearch={() => {}} />);

    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("Should call handleSearch with the correct value after 700ms", async () => {
    const onHandleSearch = vi.fn();

    render(<Searchbar handleSearch={onHandleSearch} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    // await new Promise((resolve) => setTimeout(resolve, 701));

    await waitFor(() => {
      expect(onHandleSearch).toHaveBeenCalled();
      expect(onHandleSearch).toHaveBeenCalledWith("test");
    });

    // expect(onHandleSearch).toHaveBeenCalled();
    // expect(onHandleSearch).toHaveBeenCalledWith("test");
  });

  test("should call only once with the last value", async () => {
    const onHandleSearch = vi.fn();

    render(<Searchbar handleSearch={onHandleSearch} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });

    await waitFor(() => {
      expect(onHandleSearch).toHaveBeenCalledTimes(1);
      expect(onHandleSearch).toHaveBeenCalledWith("t");
    });
  });

  test("shold call onHandleSearchwhen button clicked with the input value", async () => {
    const onHandleSearch = vi.fn();

    render(<Searchbar handleSearch={onHandleSearch} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onHandleSearch).toHaveBeenCalledTimes(1);
    expect(onHandleSearch).toHaveBeenCalledWith("t");
  });

  test("should the input has the correct placeholder value", () => {
    const value = "Buscar gif";
    render(<Searchbar handleSearch={() => {}} placeHolderValue={value} />);

    expect(screen.getByPlaceholderText(value)).toBeDefined();
  });
});
