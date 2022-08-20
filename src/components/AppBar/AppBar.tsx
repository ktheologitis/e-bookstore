import "./app-bar.scss";
import menuIcon from "../../assets/images/menu.png";
import cartIcon from "../../assets/images/cart.png";
import FabButton from "../IconButton/IconButton";
import { IconButtonStyles } from "../../lib/enums";

const AppBar = () => {
  return (
    <header className="app-bar">
      <FabButton icon={menuIcon} style={IconButtonStyles.Flat} />
      <p className="header__title">BookStore</p>
      <section className="app-bar__cart">
        <FabButton icon={cartIcon} style={IconButtonStyles.Flat} />
        <div className="app-bar__cart-count">{1}</div>
      </section>
    </header>
  );
};

export default AppBar;
