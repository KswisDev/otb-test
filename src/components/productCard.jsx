import styled from "styled-components";
import { useState } from "react";

const ProductWrapper = styled.div`
  display: flex;
`;

const OverviewWrapper = styled.section`
  text-align: left;
  margin-top: -22px;
`;

const InfoWrapper = styled.section`
  text-align: left;
  padding: 1rem;
  p {
    font-size: 12px;
    line-height: 20px;
    margin: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 20px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 16px;
  }
`;

const OuterWrapper = styled.div`
  padding: 1rem;
`;

function ProductCard({ product, index }) {
  const [showOverview, setShowOverview] = useState(false);
  if (!product) return null;
  return (
    <OuterWrapper>
      <ProductWrapper data-testid={`product-${index}`}>
        <img src={`/images/${product.imageName}`} alt="" />
        <InfoWrapper>
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
        </InfoWrapper>
      </ProductWrapper>
      <OverviewWrapper>
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
        {showOverview && (
          <>
            <h4>Overview</h4>
            <p>{product.overview}</p>
          </>
        )}
      </OverviewWrapper>
    </OuterWrapper>
  );
}

export default ProductCard;
