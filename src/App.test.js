import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the site brand in the navbar", () => {
  render(<App />);
  const brand = screen.getByText(/maha javed/i);
  expect(brand).toBeInTheDocument();
});
