import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BasketPage from "./pages/BasketPage/BasketPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
