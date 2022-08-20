import ProductCard from "../../components/ProductCard/ProductCard";
import "./product-page.scss";

const ProductsPage = () => {
  return (
    <main className="product-page">
      <header className="product-page__header">
        <p>Products</p>
      </header>
      <main className="product-page__products">
        <ProductCard
          title="Book 1"
          price="20"
          stock={2}
          img="https://picsum.photos/200?random=1"
        />
        <ProductCard
          title="Book 1"
          price="20"
          stock={2}
          img="https://picsum.photos/200?random=1"
        />
      </main>
    </main>
  );
};

export default ProductsPage;
