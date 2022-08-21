import { Products } from "../lib/types";

export const useCachedProducts = () => {
  const fromLocalStorage = window.localStorage.getItem("cachedProducts");
  const cachedProducts: Products = fromLocalStorage
    ? JSON.parse(fromLocalStorage)
    : null;

  return cachedProducts;
};
