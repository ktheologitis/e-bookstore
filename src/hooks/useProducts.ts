import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../lib/api";

export const useProducts = () => {
  const products = useQuery(
    ["products"],
    () => {
      return getProducts();
    },
    {
      staleTime: Infinity,
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  return products;
};
