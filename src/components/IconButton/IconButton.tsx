import classNames from "classnames";
import { IconButtonStyles } from "../../lib/enums";
import "./icon-button.scss";

const IconButton = ({
  label,
  icon,
  style = IconButtonStyles.Primary,
  disabled,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      className={classNames({
        [style]: true,
        "icon-button--labeled": label != null,
        "icon-button--disabled": disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {label && <p>{label}</p>}
      <img className="icon-button__icon" src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;

type IconButtonProps = {
  label?: string | null;
  icon: string;
  style?: IconButtonStyles;
  disabled?: boolean;
  onClick?: () => void;
};
