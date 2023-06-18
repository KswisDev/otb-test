function ProductDisplay({ products }) {
  return (
    <div>
      <menu>
        <li>sort alphabetically</li>
        <li>sort by price</li>
        <li>sort by star rating</li>
      </menu>
      <div>
        <h2>{products[0].hotel}</h2>
      </div>
    </div>
  );
}

export default ProductDisplay;
