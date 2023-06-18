import ProductDisplay from "./components/productDisplay";
import products from "./products.json";

function App() {
  return (
    <div>
      <ProductDisplay products={products} />
    </div>
  );
}

export default App;
