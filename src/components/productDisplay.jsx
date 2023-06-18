import ProductCard from "./productCard";
import { useState } from "react";
import { sortByProperty } from "../utilities/sortFunctions";

const hasProducts = (products) => products && products.length > 0;

function ProductDisplay({ products }) {
  const [selectedSort, setSelectedSort] = useState("price");
  const [productsToDisplay, setProductsToDisplay] = useState(
    hasProducts(products) ? sortByProperty(products, "price", true) : null
  );

  if (!hasProducts(products)) {
    return null;
  }

  const handleOptionChange = (event) => {
    setSelectedSort(event.target.value);
    switch (event.target.value) {
      case "alphabetically":
        setProductsToDisplay(sortByProperty(productsToDisplay, "hotel"));
        break;
      case "rating":
        setProductsToDisplay(sortByProperty(productsToDisplay, "rating", true));
        break;
      default:
        setProductsToDisplay(sortByProperty(productsToDisplay, "price", true));
        break;
    }
  };

  return (
    <div>
      <menu>
        <li>
          <label>
            <input
              type="radio"
              name="sort"
              value="alphabetically"
              checked={selectedSort === "alphabetically"}
              onChange={handleOptionChange}
            />
            sort alphabetically
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="sort"
              value="price"
              checked={selectedSort === "price"}
              onChange={handleOptionChange}
            />
            sort by price
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="sort"
              value="rating"
              checked={selectedSort === "rating"}
              onChange={handleOptionChange}
            />
            sort by star rating
          </label>
        </li>
      </menu>
      {productsToDisplay.map((product, index) => (
        <ProductCard product={product} index={index} key={product.hotel} />
      ))}
    </div>
  );
}

export default ProductDisplay;
