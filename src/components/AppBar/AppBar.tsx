import "./app-bar.scss";
import cartIcon from "../../assets/images/cart.png";
import bookIcon from "../../assets/images/book.png";
import IconButton from "../IconButton/IconButton";
import { Breakpoints, IconButtonStyles } from "../../lib/enums";
import { useBreakPoint } from "../../hooks/useBreakPoint";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../../contextProviders/BasketContextProvider";

const AppBar = () => {
  const navigate = useNavigate();
  const breakPoint = useBreakPoint();
  const basket = useContext(BasketContext);

  return (
    <header className="app-bar">
      <p className="header__title">BookStore</p>
      <nav className="app-bar__navigation">
        <ul>
          <li>
            <IconButton
              icon={bookIcon}
              style={IconButtonStyles.Flat}
              label={breakPoint === Breakpoints.Desktop ? "Products" : null}
              onClick={() => {
                navigate("./products");
              }}
            />
          </li>
          <li>
            <IconButton
              icon={cartIcon}
              style={IconButtonStyles.Flat}
              label={breakPoint === Breakpoints.Desktop ? "My Basket" : null}
              onClick={() => {
                navigate("./basket");
              }}
            />
            {basket.data.count > 0 && (
              <div
                className="app-bar__basket-count"
                onClick={() => {
                  navigate("./basket");
                }}
              >
                {basket.data.count}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
