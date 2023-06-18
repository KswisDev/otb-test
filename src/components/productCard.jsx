import styled from "styled-components";
import { useState } from "react";

const ToggleText = styled.p`
  display: ${(props) => (props.showOverview ? "block" : "none")};
`;

function ProductCard({ product, index }) {
  const [showOverview, setShowOverview] = useState(false);
  if (!product) return null;
  return (
    <div data-testid={`product-${index}`}>
      <img src="" alt="" />
      <button
        onClick={() => setShowOverview(!showOverview)}
        data-testid={"overview-button"}
      >
        {showOverview ? (
          <>
            <strong>Read less</strong> about this hotel
          </>
        ) : (
          <>
            <strong>Read more</strong> about this hotel
          </>
        )}
      </button>
      <div>
        <h2>{product.hotel}</h2>
        <h3>{product.location}</h3>
        <p>{product.rating}</p>
        <p>
          <strong>{product.adults}</strong> Adults,{" "}
          <strong>{product.children}</strong> children{" "}
          {product.infant ? `& ${product.infant} infant` : ""}
        </p>
        <p>
          <strong>{product.startDate}</strong> for{" "}
          <strong>{product.duration} days</strong>
        </p>
        <p>
          departing from <strong>{product.depatureAirport}</strong>
        </p>
        <button>Book now {product.price}</button>
        <p>{product.price}</p>
      </div>
      <div>
        <h4>Overview</h4>
        <ToggleText showOverview={showOverview}>{product.overview}</ToggleText>
      </div>
    </div>
  );
}

export default ProductCard;
