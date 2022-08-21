import { useState } from "react";
import { useBreakPoint } from "../../hooks/useBreakPoint";
import { Breakpoints, ButtonStyles } from "../../lib/enums";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import cartIcon from "../../assets/images/cart.png";
import "./product-card.scss";

const ProductCard = ({ title, price, stock, img }: ProductCardProps) => {
  const [hover, setHover] = useState(false);
  const breakPoint = useBreakPoint();

  const isDesktop = breakPoint === Breakpoints.Desktop;
  const isMobile = breakPoint === Breakpoints.Mobile;

  return (
    <article className="product-card">
      <section
        className="product-card__media"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img className="product-card__img" src={img} alt="book" />
        {hover && isDesktop && (
          <div className="product-card__hover-elements">
            <p className="product-card__stock">{stock.toString()} left</p>
            <Button label="Add to cart" style={ButtonStyles.White} />
          </div>
        )}
      </section>
      <section className="product-card__headline">{title}</section>
      <section className="product-card__details">
        <section className="product-card__supporting-text">
          <p className="product-card__price">€ {price}</p>
          {isMobile && (
            <p className="product-card__stock--mobile">{stock} left</p>
          )}
        </section>
        {isMobile && (
          <section className="product-card__actions">
            <IconButton icon={cartIcon} />
          </section>
        )}
      </section>
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
