import { cleanup, render, screen } from "@testing-library/react";
import { About } from "./About";

afterEach(cleanup);

it("Home Page has a heading", () => {
  render(<About />);
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toBeInTheDocument();
});
it("Both pictures have accessible text", () => {
  render(<About />);
  const image1 = screen.getByAltText(/inside the restaurant/i);
  const image2 = screen.getByAltText(/our chef preparing a meal/i);

  expect(image1).toBeInTheDocument();
  expect(image2).toBeInTheDocument();
});
