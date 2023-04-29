import { describe, expect, test, vi, beforeEach } from "vitest";
import Search from "./Search";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test form", () => {
  it("should render an input element", () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText("enter search...");
    expect(searchInput).toBeVisible();
  });
});
