import React, { ButtonHTMLAttributes, useState, useEffect } from "react";
import clsx from "clsx";
// import CompsError from "./Error";
import Types from "@/types";
import styles from "@/styles/modules/button.module.scss";

interface Props extends ButtonHTMLAttributes<ButtonHTMLAttributes> {
  onClick: () => void;
  label?: string;
  desc: string;
  disabled?: boolean;
  type: ButtonHTMLAttributes;
  isHollow?: boolean;
  isVertical?: boolean;
  size: Types.Sizes;
  theme?: Types.Themes;
  rounded?: Types.Rounded;
  modifierClass?: string;
  // modifierIconClass?: string;
  modifierLabelClass?: string;
  icon?: React.ReactNode;
}

export default function Button({
  onClick,
  label,
  desc = 'Description button',
  disabled = false,
  type = 'button',
  isHollow = false,
  isVertical = false,
  size = 'md',
  theme = 'default',
  rounded = 'xs',
  modifierClass,
  // modifierIconClass,
  modifierLabelClass,
  icon,
}: Props) {

  // useEffect(() => {
  //   console.error("Error: don't use modifierLabelClass, when not label");
  // }, [error]);
  // const [theme, setTheme] = useState<RequestTheme>("default");

  if (!!modifierLabelClass && !!label && !icon) {
    return console.error("Error: don't use modifierLabelClass, when not label");
  }

  const isChildTotal: boolean = !!icon && !!label;

  const isSizeExists = () => Object.values(Types.Sizes).includes(size) && true;
  const isThemeExists = () => Object.values(Types.Themes).includes(theme) && true;
  const isRoundedExists = () => Object.values(Types.Rounded).includes(rounded) && true;

  const baseClass = clsx(
    styles.base,
    (!!isChildTotal && !modifierClass) && styles.baseTotal,
    (!!isHollow && !modifierClass) && styles.hollow,
    (!!isVertical && !!isChildTotal && !modifierClass) && styles.vertical,
    (!!isSizeExists && !modifierClass) && styles[`${size}`],
    (!!isThemeExists && !modifierClass) && styles[`${theme}`],
    (!!isRoundedExists && !modifierClass) && styles[`rounded-${rounded}`],
    !!modifierClass && modifierClass
  );
  const labelClass = clsx(!modifierLabelClass && styles.label, !!modifierLabelClass && [`${modifierLabelClass}`]);

  const renderLabel = () => {
    const newLabel = !!icon ? (`<label className="${labelClass}">${label}</label>`) : `${label}`;

    return newLabel;
  }

  return (
    <button className={baseClass} onClick={onClick} disabled={disabled} type={type} title={desc}>
      {icon}
      {label && renderLabel()}
    </button>
  );
}

// export default Button;
