import ProductDisplay from "./components/productDisplay";
import products from "./products.json";

function App() {
  return (
    <div style={{ backgroundImage: "url('/images/background.png')" }}>
      <ProductDisplay products={products} />
    </div>
  );
}

export default App;
