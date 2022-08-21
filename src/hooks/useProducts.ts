import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "../lib/api";
import { Product, Products } from "../lib/types";
import { useCachedProducts } from "./useCachedProducts";
import { isEqual } from "lodash";

export const useProducts = () => {
  const cachedProducts = useCachedProducts();
  const [productsData, setProductsData] = useState<Products>(
    cachedProducts ?? {}
  );

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
          normalizedData[item.id] = {
            ...item,
            selected_quantity: 0,
          };
        });

        if (!isEqual(normalizedData, cachedProducts)) {
          window.localStorage.setItem(
            "cachedProducts",
            JSON.stringify(normalizedData)
          );

          setProductsData(normalizedData);
        }
      },
    }
  );

  return { productsData, query };
};
