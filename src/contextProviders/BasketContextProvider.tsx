import React, { useEffect, useState } from "react";
import { useCheckoutPrice } from "../hooks/useCheckoutPrice";
import { Basket } from "../lib/types";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;

const initialBasketData = {
  items: [],
  count: 0,
  checkout_price: 0,
  hasDiscount: month === 8 && day === 21,
  discount: 0.2,
};

export const BasketContext = React.createContext<BasketContextData>({
  data: initialBasketData,
  update: () => {},
});

const BasketContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Basket>(initialBasketData);
  const checkoutPrice = useCheckoutPrice(data);

  const update = (updatedBasket: Basket) => {
    setData(updatedBasket);
  };

  useEffect(() => {
    setData((data) => {
      return {
        ...data,
        checkout_price: checkoutPrice,
      };
    });
  }, [checkoutPrice]);

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
