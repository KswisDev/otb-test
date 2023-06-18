import ProductCard from "./productCard";

function ProductDisplay({ products }) {
  if (!products || products.length < 1) {
    return null;
  }
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
      {products.map((product, index) => (
        <ProductCard product={product} index={index} key={product.hotel} />
      ))}
    </div>
  );
}

export default ProductDisplay;
