import { useState } from "react";
import {
  ProductWrapper,
  OverviewWrapper,
  InfoWrapper,
  OuterWrapper,
  BookCTA,
  UKPound,
  StarIcon,
} from "./productCard.styles";

function ProductCard({ product, index }) {
  const [showOverview, setShowOverview] = useState(false);
  if (!product) return null;

  const stars = [];
  for (let i = 0; i < product.rating; i++) {
    stars.push(<StarIcon key={`star${i}`} />);
  }

  return (
    <OuterWrapper>
      <ProductWrapper data-testid={`product-${index}`}>
        <img src={`/images/${product.imageName}`} alt="" />
        <InfoWrapper>
          <h2>{product.hotel}</h2>
          <h3>{product.location}</h3>
          <p>{stars}</p>
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
          <br />
          <BookCTA data-testid={"cta-button"}>
            Book now {UKPound.format(product.price)}
          </BookCTA>
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
