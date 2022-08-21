import IconButton from "../IconButton/IconButton";
import addIcon from "../../assets/images/add.png";
import removeIcon from "../../assets/images/remove.png";
import "./basket-product-card.scss";
import { Product } from "../../lib/types";
import { useUpdateBasket } from "../../hooks/useUpdateBasket";

const BasketProductCard = ({
  id,
  title,
  price,
  selected_quantity,
  image_url,
  stock_quantity,
}: BasketProductCardProps) => {
  const updateBasket = useUpdateBasket();

  const handleIncreaseQuantity = () => {
    updateBasket(id, "add");
  };

  const handleDecreaseQuantity = () => {
    updateBasket(id, "remove");
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
