import { ButtonStyles } from "../../lib/enums";
import "./button.scss";

const Button = ({ label, style }: ButtonProps) => {
  return <button className={style}>{label}</button>;
};

export default Button;

type ButtonProps = {
  label: string;
  style: ButtonStyles;
};
