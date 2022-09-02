import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/products/:productID" element={<ProductDetail />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
