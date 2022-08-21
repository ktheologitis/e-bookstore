import { useContext } from "react";
import { BasketContext } from "../contextProviders/BasketContextProvider";
import { ProductsContext } from "../contextProviders/ProductsContextProvider";

export const useUpdateBasket = () => {
  const basket = useContext(BasketContext);
  const { products, updateStock } = useContext(ProductsContext);

  const updateBasket = (id: string, action: "add" | "remove") => {
    updateStock(id, action);

    switch (action) {
      case "add":
        if (!basket.data.items.includes(id)) {
          const updatedItems = [...basket.data.items];
          updatedItems.push(id);
          basket.update({
            ...basket.data,
            items: updatedItems,
            count: basket.data.count + 1,
          });
          return;
        }
        basket.update({
          ...basket.data,
          count: basket.data.count + 1,
        });
        return;
      case "remove":
        if (products[id].selected_quantity === 1) {
          basket.update({
            ...basket.data,
            count: basket.data.count - 1,
            items: basket.data.items.filter((item) => item !== id),
          });
          return;
        }
        basket.update({
          ...basket.data,
          count: basket.data.count - 1,
        });
        return;
    }
  };

  return updateBasket;
};
