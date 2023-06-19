import ProductCard from "./productCard";
import { useState } from "react";
import { sortByProperty } from "../utilities/sortFunctions";
import styled from "styled-components";
import { FaSortAlphaDown, FaPoundSign, FaStar } from "react-icons/fa";

const hasProducts = (products) => products && products.length > 0;

const FlexBox = styled.div`
  display: flex;
  padding: 2rem;
`;

const ProductsContainer = styled.div`
  padding: 1rem;
`;

const SortMenu = styled.menu`
  min-width: 200px;
  list-style-type: none;

  label {
    display: inline-block;
    background-color: white;
    padding: 10px 20px;
    font-size: 16px;
    width: 100%;
    border-bottom: solid #b7bfd8 2px;
    color: ${(props) => props.theme.blue};

    span {
      margin-right: 20px;
    }

    svg {
      float: right;
    }
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background-color: ${(props) => props.theme.blue};
    color: white;
  }
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
          <input
            id="alphabetically-radio"
            type="radio"
            name="sort"
            value="alphabetically"
            checked={selectedSort === "alphabetically"}
            onChange={handleOptionChange}
          />
          <label htmlFor="alphabetically-radio">
            <span>
              sort <strong>alphabetically</strong>
            </span>
            <FaSortAlphaDown />
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="sort"
            value="price"
            checked={selectedSort === "price"}
            onChange={handleOptionChange}
            id="price-radio"
          />
          <label htmlFor="price-radio">
            <span>
              sort by <strong>price</strong>
            </span>
            <FaPoundSign />
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="sort"
            value="rating"
            checked={selectedSort === "rating"}
            onChange={handleOptionChange}
            id="rating-radio"
          />
          <label htmlFor="rating-radio">
            <span>
              sort by <strong>star rating</strong>
            </span>
            <FaStar />
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
