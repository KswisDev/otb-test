function ProductDisplay({ products }) {
  return (
    <div>
      <menu>
        <li>
          <label>
            <input type="radio" name="sort" value="alphabetically" />
            sort alphabetically
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="sort" value="price" />
            sort by price
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="sort" value="rating" />
            sort by star rating
          </label>
        </li>
      </menu>
      <div data-testid="product-1">
        <h2>{products[0].hotel}</h2>
      </div>
    </div>
  );
}

export default ProductDisplay;
