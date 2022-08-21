import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../contextProviders/ProductsContextProvider";
import { Basket } from "../lib/types";

export const useCheckoutPrice = (data: Basket) => {
  const { products } = useContext(ProductsContext);
  const [checkoutPrice, setCheckoutPrice] = useState(data.checkout_price);

  useEffect(() => {
    let NewCheckoutPrice = 0;
    data.items.forEach((id) => {
      NewCheckoutPrice =
        NewCheckoutPrice + products[id].price * products[id].selected_quantity;
    });
    setCheckoutPrice(
      data.hasDiscount
        ? applyDiscount(NewCheckoutPrice, data.discount)
        : NewCheckoutPrice
    );
  }, [data.items, data.discount, data.hasDiscount, products]);

  return checkoutPrice;
};

const applyDiscount = (amount: number, discount: number) => {
  return amount - amount * discount;
};
