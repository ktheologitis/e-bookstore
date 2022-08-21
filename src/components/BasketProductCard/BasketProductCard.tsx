import IconButton from "../IconButton/IconButton";
import addIcon from "../../assets/images/add.png";
import removeIcon from "../../assets/images/remove.png";
import "./basket-product-card.scss";
import { Product } from "../../lib/types";
import { useContext } from "react";
import { ProductsContext } from "../../contextProviders/ProductsContextProvider";
import { BasketContext } from "../../contextProviders/BasketContextProvider";

const BasketProductCard = ({
  id,
  title,
  price,
  selected_quantity,
  image_url,
  stock_quantity,
}: BasketProductCardProps) => {
  const { updateStock } = useContext(ProductsContext);
  const basket = useContext(BasketContext);

  const handleIncreaseQuantity = () => {
    updateStock(id, "add");
    basket.update({
      ...basket.data,
      count: basket.data.count + 1,
    });
  };

  const handleDecreaseQuantity = () => {
    updateStock(id, "remove");
    if (selected_quantity === 1) {
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
  };

  return (
    <article className="basket-product-card">
      <img className="basket-product-card__img" src={image_url} alt="book" />
      <section className="basket-product-card__content">
        <header className="basket-product-card__headline">
          <p className="basket-product-card__header">{title}</p>
          <p className="basket-product-card__subheader">
            {stock_quantity.toString()} left
          </p>
        </header>
        <section className="basket-product-card__selected-quantity">
          <IconButton icon={removeIcon} onClick={handleDecreaseQuantity} />
          <p>{selected_quantity.toString()}</p>
          <IconButton
            icon={addIcon}
            disabled={stock_quantity === 0}
            onClick={handleIncreaseQuantity}
          />
        </section>
        <p className="basket-product-card__price">
          € {(price * selected_quantity).toFixed(2).toString()}
        </p>
      </section>
    </article>
  );
};

export default BasketProductCard;

type BasketProductCardProps = Omit<Product, "discount_sets">;
