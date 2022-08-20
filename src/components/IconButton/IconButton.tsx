import { IconButtonStyles } from "../../lib/enums";
import "./icon-button.scss";

const IconButton = ({
  icon,
  style = IconButtonStyles.Primary,
}: IconButtonProps) => {
  return (
    <button className={style}>
      <img className="icon-button__icon" src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;

type IconButtonProps = {
  icon: string;
  style?: IconButtonStyles;
};
