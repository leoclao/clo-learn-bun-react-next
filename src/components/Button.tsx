import React, { ButtonHTMLAttributes, useState, useEffect } from "react";
import clsx from "clsx";
// import CompsError from "./Error";
import styles from "@/styles/modules/button.module.scss";

interface Props extends ButtonHTMLAttributes<ButtonHTMLAttributes> {
  onClick: () => void;
  label: string;
  desc: string;
  isDisable?: boolean;
  isHollow?: boolean;
  isVertical?: boolean;
  size?: string;
  theme?: string;
  rounded?: string;
  modifierClass?: string;
  // modifierIconClass?: string;
  modifierLabelClass?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  onClick,
  label = 'Button',
  desc = 'Button Action',
  isDisable = false,
  isHollow = false,
  isVertical = false,
  size,
  theme,
  rounded,
  modifierClass,
  // modifierIconClass,
  modifierLabelClass,
  icon,
}) => {

  // useEffect(() => {
  //   console.error("Error: don't use modifierLabelClass, when not label");
  // }, [error]);

  if(!!modifierLabelClass && !!label && !icon) {
    return console.error("Error: don't use modifierLabelClass, when not label");
  }

  const childTotal: boolean = !!icon && !!label;

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
  const sizesClass = [styles.xs, styles.sm, styles.md, styles.lg, styles.xl, styles.xxl, styles.xxxl];
  const setSize = () => sizesClass[sizes.indexOf(size)];

  const themes = [];
  const themesClass = [];
  const setTheme = () => themesClass[themes.indexOf(theme)];

  const rounds = [];
  const roundsClass = [];
  const setRounded = () => roundsClass[rounds.indexOf(rounded)];

  const baseClass = clsx({
    [`${styles.base}`]: !childTotal && !modifierClass,
    [`${styles.baseTotal}`]: !!childTotal && !modifierClass,
    [`${styles.hollow}`]: !!isHollow && !modifierClass,
    [`${styles.vertical}`]: !!isVertical && !!childTotal && !modifierClass,
    [`${setSize()}`]: !!size && !modifierClass,
    [`${setTheme()}`]: !!theme && !modifierClass,
    [`${setRounded()}`]: !!rounded && !modifierClass,
    [`${modifierClass}`]: !!modifierClass
  });
  const labelClass = clsx({
    [`${styles.label}`]: !modifierLabelClass,
    [`${modifierLabelClass}`]: !!modifierLabelClass,
  });

  const renderLabel = () => {
    const newLabel = icon ? `${<label className={labelClass}>{label}</label>}` : `${label}`;

    return newLabel;
  }

  return (
    <button className={baseClass}  onClick={onClick} disabled={isDisable}>
      {icon && {icon}}
      {label && renderLabel()}
    </button>
  );
}

export default Button;
