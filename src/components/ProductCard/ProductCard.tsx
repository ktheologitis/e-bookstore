import { useContext, useState } from "react";
import { useBreakPoint } from "../../hooks/useBreakPoint";
import { Breakpoints, ButtonStyles } from "../../lib/enums";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import cartIcon from "../../assets/images/cart.png";
import "./product-card.scss";
import { BasketContext } from "../../contextProviders/BasketContextProvider";
import { Product } from "../../lib/types";

const ProductCard = ({
  id,
  title,
  image_url,
  stock_quantity,
  price,
  updateStock,
}: ProductCardProps) => {
  const [hover, setHover] = useState(false);
  const breakPoint = useBreakPoint();
  const basket = useContext(BasketContext);

  const isDesktop = breakPoint === Breakpoints.Desktop;
  const isMobile = breakPoint === Breakpoints.Mobile;

  const handleAddToBasket = () => {
    updateStock(id, "add");

    if (!basket.data.items.includes(id)) {
      const updatedItems = [...basket.data.items];
      updatedItems.push(id);
      basket.update({
        ...basket.data,
        items: updatedItems,
        count: basket.data.count + 1,
      });
      return;
    }

    basket.update({
      ...basket.data,
      count: basket.data.count + 1,
    });
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

type ProductCardProps = Omit<Product, "discount_sets" | "selected_quantity"> & {
  updateStock: (id: string, action: "add" | "remove") => void;
};
