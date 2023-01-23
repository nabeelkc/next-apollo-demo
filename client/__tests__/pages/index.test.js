import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/index";

describe("Dashboard page", () => {
  it("Renders the headline", () => {
    render(<Home />);
    const heading = screen.getByTestId("title");
    const title = "People Data List";
    expect(heading).toHaveTextContent(title);
  });

  it("Renders the Load More button", () => {
    render(<Home />);
    const loadMoreButton = screen.getByRole("button");
    expect(loadMoreButton).toHaveTextContent("Load More");
  });
});
