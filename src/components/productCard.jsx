function ProductCard({ product, index }) {
  return (
    <div data-testid={`product-${index}`}>
      <img src="" alt="" />
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
        <p>{product.overview}</p>
      </div>
    </div>
  );
}

export default ProductCard;
