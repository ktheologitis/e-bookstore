import "./app-bar.scss";
import cartIcon from "../../assets/images/cart.png";
import bookIcon from "../../assets/images/book.png";
import IconButton from "../IconButton/IconButton";
import { Breakpoints, IconButtonStyles } from "../../lib/enums";
import { useBreakPoint } from "../../hooks/useBreakPoint";

const AppBar = () => {
  const breakPoint = useBreakPoint();

  return (
    <header className="app-bar">
      <p className="header__title">BookStore</p>
      <nav className="app-bar__navigation">
        <ul>
          <li>
            {breakPoint === Breakpoints.Desktop && "Products"}
            <IconButton icon={bookIcon} style={IconButtonStyles.Flat} />
          </li>
          <li className="app-bar__basket">
            {breakPoint === Breakpoints.Desktop && "My Basket"}
            <IconButton icon={cartIcon} style={IconButtonStyles.Flat} />
            <div className="app-bar__basket-count">{1}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
