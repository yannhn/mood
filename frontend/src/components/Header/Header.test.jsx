import { expect } from "vitest";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test header", () => {
  it("should display the h1 correctly", () => {
    render(<Header />);
    const headline = screen.getByText("mood");
    expect(headline).toBeVisible();
  });
  it("should render boards correctly", () => {
    render(<Header />);
    const navBoards = screen.getByText("Boards");
    expect(navBoards).toBeInTheDocument();
  });
  it("should render login/profile correctly", () => {
    render(<Header />);
    const navLogin = screen.getByText("Login/Profile");
    expect(navLogin).toBeInTheDocument();
  });
});
