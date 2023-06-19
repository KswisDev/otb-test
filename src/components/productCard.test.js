import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "./productCard";
import products from "../products.json";

test("should be able to toggle overview text", () => {
  const product = { ...products[0], overview: "test subject" };
  render(<ProductCard product={product} />);
  let hiddenText = screen.queryByText(/test subject/i);
  expect(hiddenText).not.toBeInTheDocument();
  expect(screen.getByText(/Read more/i)).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("overview-button"));

  hiddenText = screen.queryByText(/test subject/i);
  expect(hiddenText).toBeInTheDocument();
  expect(screen.getByText(/Read less/i)).toBeInTheDocument();
});

test("does not render if no product", () => {
  render(<ProductCard />);
  let buttonElement = screen.queryByText(/Overview/i);
  expect(buttonElement).toBeNull();
});
