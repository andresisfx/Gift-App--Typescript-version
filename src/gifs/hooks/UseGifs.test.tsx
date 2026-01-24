import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query";

describe("UseGifs", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifFetched.length).toBe(0);
    expect(result.current.previousSearch.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.previosClick).toBeDefined();
  });
  test("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleSearch("goku");
    });

    expect(result.current.gifFetched.length).toBe(25);
  });
  test("should return a list of gifs when previosClick is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("goku");
      await result.current.previosClick("goku");
    });

    expect(result.current.gifFetched.length).toBe(25);
  });
  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.previosClick("goku");
    });

    expect(result.current.gifFetched.length).toBe(25);

    vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
      new Error("this is a custom error"),
    );

    await act(async () => {
      await result.current.previosClick("goku");
    });

    expect(result.current.gifFetched.length).toBe(25);
  });

  test("should return no more than 8 terms", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("goku1");
    });
    await act(async () => {
      await result.current.handleSearch("goku2");
    });
    await act(async () => {
      await result.current.handleSearch("goku3");
    });
    await act(async () => {
      await result.current.handleSearch("goku4");
    });
    await act(async () => {
      await result.current.handleSearch("goku5");
    });
    await act(async () => {
      await result.current.handleSearch("goku6");
    });
    await act(async () => {
      await result.current.handleSearch("goku7");
    });
    await act(async () => {
      await result.current.handleSearch("goku8");
    });

    expect(result.current.previousSearch.length).toBe(7);
    //pending strict equal test here
  });
});
