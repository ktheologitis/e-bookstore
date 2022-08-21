import classNames from "classnames";
import { ButtonStyles } from "../../lib/enums";
import "./button.scss";

const Button = ({
  label,
  style = ButtonStyles.Primary,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames({
        [style]: true,
        "button--disabled": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

type ButtonProps = {
  label: string;
  style?: ButtonStyles;
  disabled?: boolean;
  onClick?: () => void;
};
