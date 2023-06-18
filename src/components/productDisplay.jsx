import ProductCard from "./productCard";
import { useState } from "react";
import { sortByProperty } from "../utilities/sortFunctions";
import styled from "styled-components";

const hasProducts = (products) => products && products.length > 0;

const FlexBox = styled.div`
  display: flex;
  padding: 2rem;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  text-align: center;
  padding: 1rem;
  flex-direction: column;
`;

const SortMenu = styled.menu`
  min-width: 200px;
`;

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
        setProductsToDisplay(
          sortByProperty(productsToDisplay, "rating", true, "desc")
        );
        break;
      default:
        setProductsToDisplay(sortByProperty(productsToDisplay, "price", true));
        break;
    }
  };

  return (
    <FlexBox>
      <SortMenu>
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
      </SortMenu>
      <ProductsContainer>
        {productsToDisplay.map((product, index) => (
          <ProductCard product={product} index={index} key={product.hotel} />
        ))}
      </ProductsContainer>
    </FlexBox>
  );
}

export default ProductDisplay;
