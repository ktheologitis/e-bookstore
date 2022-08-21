export type Product = {
  id: string;
  title: string;
  image_url: string;
  price: number;
  stock_quantity: number;
  discount_sets: string;
  selected_quantity: number;
};

export type Products = { [id: string]: Product };

export type Basket = {
  items: string[];
  count: number;
  checkout_price: number;
  hasDiscount: boolean;
  discount: number;
};
