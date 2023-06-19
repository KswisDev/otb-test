import ProductDisplay from "./components/productDisplay";
import products from "./products.json";
import { ThemeProvider } from "styled-components";

const theme = {
  blue: "#17317f",
  yellow: "#fedc07",
};

function App() {
  return (
    <div style={{ backgroundImage: "url('/images/background.png')" }}>
      <ThemeProvider theme={theme}>
        <ProductDisplay products={products} />
      </ThemeProvider>
    </div>
  );
}

export default App;
