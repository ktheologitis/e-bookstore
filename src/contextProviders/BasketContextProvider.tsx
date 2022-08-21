import React, { useContext, useEffect, useState } from "react";
import { Basket } from "../lib/types";
import { ProductsContext } from "./ProductsContextProvider";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;

const initialBasketData = {
  items: [],
  count: 0,
  checkout_price: 0,
  hasDiscount: month === 8 && day === 1,
  discount: 0.2,
};

export const BasketContext = React.createContext<BasketContextData>({
  data: initialBasketData,
  update: () => {},
});

const BasketContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { products } = useContext(ProductsContext);
  const [data, setData] = useState<Basket>(initialBasketData);

  const update = (updatedBasket: Basket) => {
    setData(updatedBasket);
  };

  useEffect(() => {
    let new_checkout_price = 0;
    data.items.forEach((id) => {
      new_checkout_price =
        new_checkout_price +
        products[id].price * products[id].selected_quantity;
    });

    setData((data) => {
      return {
        ...data,
        checkout_price: data.hasDiscount
          ? applyDiscount(new_checkout_price, data.discount)
          : new_checkout_price,
      };
    });
  }, [data.count, data.items, products]);

  return (
    <BasketContext.Provider value={{ data: data, update: update }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

type BasketContextData = {
  data: Basket;
  update: (updatedBasket: Basket) => void;
};

const applyDiscount = (amount: number, discount: number) => {
  return amount - amount * discount;
};
