import { useContext } from "react";
import { BasketContext } from "../../contextProviders/BasketContextProvider";
import "./billing-section.scss";

const BillingSection = () => {
  const { data } = useContext(BasketContext);

  return (
    <section className="billing-section">
      <p className="billing-section__sum">
        Sum{" "}
        {data.hasDiscount && (
          <span className="billing-section__discount">(discount 20%)</span>
        )}
      </p>
      <p className="billing-section__price">
        € {data.checkout_price.toFixed(2).toString()}
      </p>
    </section>
  );
};

export default BillingSection;
