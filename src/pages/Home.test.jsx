import { cleanup, render, screen } from "@testing-library/react";
import { Home } from "./Home";

afterEach(cleanup);

it("Home Page has a heading", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toBeInTheDocument();
});

it("Home Page has an introduction and greeting", () => {
  render(<Home />);
  const blurb = screen.getByText(
    /the little lemon restaurant has been serving Chicago/
  );
  expect(blurb).toBeInTheDocument();
});
