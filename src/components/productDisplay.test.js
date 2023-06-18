import { fireEvent, render, screen, within } from "@testing-library/react";
import ProductDisplay from "./productDisplay";
import products from "../products.json";

test("renders sort menu", () => {
  render(<ProductDisplay products={products} />);
  let buttonElement = screen.getByText(/sort alphabetically/i);
  expect(buttonElement).toBeInTheDocument();

  buttonElement = screen.getByText(/sort by price/i);
  expect(buttonElement).toBeInTheDocument();

  buttonElement = screen.getByText(/sort by star rating/i);
  expect(buttonElement).toBeInTheDocument();
});

test("does not render if no products", () => {
  render(<ProductDisplay />);
  let buttonElement = screen.getByText(/sort alphabetically/i);
  expect(buttonElement).not.toBeInTheDocument();
});

test("renders products sorted by price by default", () => {
  render(<ProductDisplay products={products} />);
  const { getByText } = within(screen.getByTestId("product-1"));
  expect(getByText("£1,136.50")).toBeInTheDocument();
  const radioInput = screen.getByLabelText("sort by price");
  expect(radioInput).toBeChecked();
});

test("should allow user to order products alphabetically", () => {
  render(<ProductDisplay products={products} />);
  const radioInput = screen.getByLabelText("sort alphabetically");
  expect(radioInput).not.toBeChecked();
  fireEvent.click(radioInput);
  expect(radioInput).toBeChecked();
  const { getByText } = within(screen.getByTestId("product-1"));
  expect(getByText("Aguamarina Golf Hotel")).toBeInTheDocument();
});
