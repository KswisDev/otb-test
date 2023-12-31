import { fireEvent, render, screen, within } from "@testing-library/react";
import ProductDisplay from "./productDisplay";
import products from "../products.json";

test("renders sort menu", () => {
  render(<ProductDisplay products={products} />);
  let buttonElement = screen.getByText(/alphabetically/i);
  expect(buttonElement).toBeInTheDocument();

  buttonElement = screen.getByText(/price/i);
  expect(buttonElement).toBeInTheDocument();

  buttonElement = screen.getByText(/star rating/i);
  expect(buttonElement).toBeInTheDocument();
});

test("does not render if no products", () => {
  render(<ProductDisplay />);
  let buttonElement = screen.queryByText(/sort alphabetically/i);
  expect(buttonElement).toBeNull();
});

test("renders products sorted by price by default", () => {
  render(<ProductDisplay products={products} />);
  const { getByText } = within(screen.getByTestId("product-0"));
  expect(getByText(/499.99/i)).toBeInTheDocument();
  const radioInput = screen.getByLabelText("sort by price");
  expect(radioInput).toBeChecked();
});

test("should allow user to order products alphabetically", () => {
  render(<ProductDisplay products={products} />);
  const radioInput = screen.getByLabelText("sort alphabetically");
  expect(radioInput).not.toBeChecked();
  fireEvent.click(radioInput);
  expect(radioInput).toBeChecked();
  const { getByText } = within(screen.getByTestId("product-0"));
  expect(getByText("Aguamarina Golf Hotel")).toBeInTheDocument();
});

test("should allow user to order products by rating", () => {
  render(<ProductDisplay products={products} />);
  const radioInput = screen.getByLabelText("sort by star rating");
  expect(radioInput).not.toBeChecked();
  fireEvent.click(radioInput);
  expect(radioInput).toBeChecked();
  const { getByText } = within(screen.getByTestId("product-0"));
  expect(getByText("Iberostar Grand Salome")).toBeInTheDocument();
});
