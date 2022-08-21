import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Products } from "../lib/types";
import { cloneDeep } from "lodash";
import { useCachedProducts } from "../hooks/useCachedProducts";

const initialProductsData = {
  products: {},
  status: "",
  updateStock: () => {},
};

export const ProductsContext =
  React.createContext<ProductsContextData>(initialProductsData);

const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cachedProducts = useCachedProducts();
  const [products, setProducts] = useState<Products>(
    cachedProducts ?? initialProductsData.products
  );
  const { productsData, query } = useProducts();

  const updateStock = (id: string, action: "add" | "remove") => {
    const newProducts = cloneDeep(products);
    if (action === "add") {
      newProducts[id].stock_quantity--;
      newProducts[id].selected_quantity++;
    } else {
      newProducts[id].stock_quantity++;
      newProducts[id].selected_quantity--;
    }
    setProducts(newProducts);
  };

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        status: query.status,
        updateStock: updateStock,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

type ProductsContextData = {
  products: Products;
  status: string;
  updateStock: (id: string, action: "add" | "remove") => void;
};
