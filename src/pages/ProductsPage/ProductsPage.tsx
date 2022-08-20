import PageHeader from "../../components/PageHeader/PageHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./products-page.scss";

const ProductsPage = () => {
  return (
    <main className="products-page">
      <PageHeader title="Products" />
      <main className="products-page__products">
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
