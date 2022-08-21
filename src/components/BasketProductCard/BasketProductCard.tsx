import IconButton from "../IconButton/IconButton";
import addIcon from "../../assets/images/add.png";
import removeIcon from "../../assets/images/remove.png";
import "./basket-product-card.scss";

const BasketProductCard = ({
  title,
  price,
  amount_selected,
  stock,
}: BasketProductCardProps) => {
  return (
    <article className="basket-product-card">
      <img
        className="basket-product-card__img"
        src="https://picsum.photos/200?random=1"
        alt="book"
      />
      <section className="basket-product-card__details">
        <header className="basket-product-card__title">{title}</header>
        <div className="basket-product-card__product-amount">
          <IconButton icon={removeIcon} />
          <p>{amount_selected.toString()}</p>
          <IconButton icon={addIcon} />
        </div>
      </section>
      <section className="basket-product-card__price">
        <p>€ {price.toString()}</p>
      </section>
    </article>
  );
};

export default BasketProductCard;

type BasketProductCardProps = {
  title: string;
  price: number;
  amount_selected: number;
  stock: number;
};
