import React, { useContext } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import IllustrationSection from "../../components/IllustrationSection/IllustrationSection";
import { ProductsContext } from "../../contextProviders/ProductsContextProvider";
import "./products-page.scss";
import { Products } from "../../lib/types";

const ProductsPage = () => {
  const fromLocalStorage = window.localStorage.getItem("cachedProducts");
  const cachedProducts: Products = fromLocalStorage
    ? JSON.parse(fromLocalStorage)
    : null;

  const { products, status, updateStock } = useContext(ProductsContext);
  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <main className="page products-page">
      {isLoading && !cachedProducts && (
        <IllustrationSection text="Please wait until we load our products ..." />
      )}
      {isLoading && cachedProducts && (
        <>
          <PageHeader title="Products" />
          <section className="products-page__products">
            {Object.values(cachedProducts ?? {}).map((product) => {
              return (
                <React.Fragment key={product.id}>
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image_url={product.image_url}
                    stock_quantity={product.stock_quantity}
                    updateStock={updateStock}
                  />
                </React.Fragment>
              );
            })}
          </section>
        </>
      )}
      {isSuccess && (
        <>
          <PageHeader title="Products" />
          <section className="products-page__products">
            {Object.values(products).map((product) => {
              return (
                <React.Fragment key={product.id}>
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image_url={product.image_url}
                    stock_quantity={product.stock_quantity}
                    updateStock={updateStock}
                  />
                </React.Fragment>
              );
            })}
          </section>
        </>
      )}
    </main>
  );
};

export default ProductsPage;
