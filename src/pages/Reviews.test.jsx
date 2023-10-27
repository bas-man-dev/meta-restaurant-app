import { cleanup, render, screen } from "@testing-library/react";
import { Reviews } from "./Reviews";

afterEach(cleanup);

it("Reviews Page has a heading", () => {
  render(<Reviews />);
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toBeInTheDocument();
});

it("Has an accessible main image", () => {
  render(<Reviews />);
  const image = screen.getByAltText(/a family at lunch/i);
  expect(image).toBeInTheDocument();
});

it("Renders customer reviews of the restaurant", () => {
  render(<Reviews />);
  const reviews = screen.getAllByText(/review/i);
  expect(reviews.length).toBeGreaterThanOrEqual(3);
});
