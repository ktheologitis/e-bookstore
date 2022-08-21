import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "../lib/api";
import { Product, Products } from "../lib/types";

export const useProducts = () => {
  const [productsData, setProducts] = useState<Products>({});

  const query = useQuery(
    ["products"],
    () => {
      return getProducts();
    },
    {
      staleTime: Infinity,
      onSuccess(data: Product[]) {
        const normalizedData: Products = {};
        data.forEach((item) => {
          normalizedData[item.id] = { ...item, selected_quantity: 0 };
        });
        window.localStorage.setItem(
          "cachedProducts",
          JSON.stringify(normalizedData)
        );
        setProducts(normalizedData);
      },
    }
  );

  return { productsData, query };
};
