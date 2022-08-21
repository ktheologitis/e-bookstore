import { useState } from "react";
import { useBreakPoint } from "../../hooks/useBreakPoint";
import { Breakpoints, ButtonStyles } from "../../lib/enums";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import cartIcon from "../../assets/images/cart.png";
import "./product-card.scss";
import { Product } from "../../lib/types";
import { useUpdateBasket } from "../../hooks/useUpdateBasket";

const ProductCard = ({
  id,
  title,
  image_url,
  stock_quantity,
  price,
}: ProductCardProps) => {
  const [hover, setHover] = useState(false);
  const breakPoint = useBreakPoint();
  const updateBasket = useUpdateBasket();

  const isDesktop = breakPoint === Breakpoints.Desktop;
  const isMobile = breakPoint === Breakpoints.Mobile;

  const handleAddToBasket = () => {
    updateBasket(id, "add");
  };

  return (
    <article className="product-card">
      <section
        className="product-card__media"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img className="product-card__img" src={image_url} alt="book" />
        {hover && isDesktop && (
          <div className="product-card__hover-elements">
            <p className="product-card__stock">
              {stock_quantity.toString()} left
            </p>
            <Button
              label="Add to basket"
              style={ButtonStyles.White}
              disabled={stock_quantity === 0}
              onClick={() => handleAddToBasket()}
            />
          </div>
        )}
      </section>
      <section className="product-card__headline">{title}</section>
      <section className="product-card__details">
        <section className="product-card__supporting-text">
          <p className="product-card__price">€ {price.toFixed(2).toString()}</p>
          {isMobile && (
            <p className="product-card__stock--mobile">
              {stock_quantity.toString()} left
            </p>
          )}
        </section>
        {isMobile && (
          <section className="product-card__actions">
            <IconButton
              icon={cartIcon}
              disabled={stock_quantity === 0}
              onClick={() => handleAddToBasket()}
            />
          </section>
        )}
      </section>
    </article>
  );
};

export default ProductCard;

type ProductCardProps = Omit<Product, "discount_sets" | "selected_quantity">;
