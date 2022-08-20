import { useState } from "react";
import "./product-card.scss";

const ProductCard = ({ title, price, stock, img }: ProductCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <article className="product-card">
      <header
        className="product-card__header"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img className="product-card__img" src={img} alt="book" />
        {hover && (
          <div className="product-card__hover-elements">
            <p className="product-card__stock">{stock.toString()} left</p>
            {/* <button disabled={stock === 0}>add to cart</button> */}
          </div>
        )}
      </header>
      <main className="product-card__details">
        <h5 className="product-card__title">{title}</h5>
        <p className="product-card__price">€ {price}</p>
      </main>
    </article>
  );
};

export default ProductCard;

type ProductCardProps = {
  title: string;
  price: string;
  stock: number;
  img: string;
};
