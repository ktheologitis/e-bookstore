import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/global.scss";
import ProductsContextProvider from "./contextProviders/ProductsContextProvider";
import BasketContextProvider from "./contextProviders/BasketContextProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ProductsContextProvider>
          <BasketContextProvider>
            <App />
          </BasketContextProvider>
        </ProductsContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
