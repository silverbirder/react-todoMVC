import { render, screen } from "@testing-library/react";
import { App } from ".";

test("renders todos text", () => {
  render(<App />);
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});
