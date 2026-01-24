import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  const initialValue = 20;
  test("Should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });
  test("Should initialize with value 20", () => {
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.counter).toBe(initialValue);
  });

  test("shoul increment counter when handledAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(11);
  });
  test("should decrement when handleSubstract is called ", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubstract();
    });

    expect(result.current.counter).toBe(9);
  });
  test("should reset when handlereset is called ", () => {
    const { result } = renderHook(() => useCounter());

    //it didn't worked when called at the same time into one act
    act(() => {
      result.current.handleSubstract();
    });
    act(() => {
      result.current.handleSubstract();
    });
    act(() => {
      result.current.handleSubstract();
    });

    expect(result.current.counter).toBe(7);

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
