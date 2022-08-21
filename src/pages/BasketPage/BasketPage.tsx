import React, { useContext } from "react";
import BasketProductCard from "../../components/BasketProductCard/BasketProductCard";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import BillingSection from "../../components/BillingSection/BillingSection";
import { BasketContext } from "../../contextProviders/BasketContextProvider";
import { ProductsContext } from "../../contextProviders/ProductsContextProvider";
import "./basket-page.scss";
import IllustrationSection from "../../components/IllustrationSection/IllustrationSection";

const BasketPage = () => {
  const basket = useContext(BasketContext);
  const { products } = useContext(ProductsContext);

  return (
    <main className="page basket-page">
      {basket.data.count > 0 && (
        <>
          <PageHeader title="My Basket" />
          <main className="basket-page__main-content">
            <section className="basket-page__basket-product-cards">
              {basket.data.items.length > 0 &&
                basket.data.items.map((id) => {
                  return (
                    <React.Fragment key={id}>
                      <BasketProductCard
                        id={id}
                        title={products[id].title}
                        selected_quantity={products[id].selected_quantity}
                        price={products[id].price}
                        image_url={products[id].image_url}
                        stock_quantity={products[id].stock_quantity}
                      />
                    </React.Fragment>
                  );
                })}
            </section>
            <BillingSection />
            <section className="actions">
              <Button label="Checkout" />
            </section>
          </main>
        </>
      )}
      {basket.data.count === 0 && (
        <IllustrationSection text="You have no products in your basket ..." />
      )}
    </main>
  );
};

export default BasketPage;
